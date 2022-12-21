//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';



contract Nft_Market is ERC721 {
    using SafeMath for uint256;
    
    address public owner;
    bool public isMintable;
    bool public cancelled;
    bool auctionStarted = false;
    bool firstTime = false; 

    // Constant variables
    uint public constant mintPrice = 0.06 ether;
    uint256 public _tokenIds; // tokenized Image Id
    uint256 public _artItemsIds; // ArtItem id for sale but not tokenized
    uint public totalSupply;

    // MAppings 
    mapping(uint256 => ArtItem) private _artItems; // Id => ArtItem
    mapping(uint256 => mapping(address => uint256)) public fundsByBidder; // MApping tokenid to fundsbybidder
    mapping(uint256 => Bid) public bid; // Bid struct to bid
    mapping(uint256 => string) private _tokenURIs;
    mapping(address => uint) public mintedWallets;


// Events 
    event LogBid(address bidder,uint bid,address highestBidder,uint highestbid ,uint highestBid);
    event LogCancelled();
    event LogWithdrawal(address withDrawer, address withdrawalAccount,uint amount);
    
    //Constructor
    constructor() ERC721('Nft-Verse', 'NIV')
    {
        owner = msg.sender;
    }
    
    // ArtCollection
    struct ArtItem {
        // it should contain => 
        address payable seller; // address of seller
        uint256 minBid; // minimum price
        string tokenURI; // Ipfs url 
        bool exists; // available or not 
        uint bidIncrement;
    }
    // Bidding token
    struct Bid {
        uint highestBid;
        address payable highestBidder; 
    }

    // function to create Token => URI
    function tokenURI(uint _tokenId) public view override (ERC721) returns (string memory) {
        return super.tokenURI(_tokenId);
    }
    // function to setURI
    function setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    // function to burn nft
    function burn(uint tokenId) internal
    {
        super._burn(tokenId);
    }
    //function to mint 
    function mint(string memory _URI) public payable
    {
        require(isMintable == false, "already minted");    
        require(mintedWallets[msg.sender] < 3, "only 3 allowed per wallet");
        require(msg.value == mintPrice, "minting price is 0.06");

        isMintable = true;
        _tokenIds++;
        _safeMint(msg.sender, _tokenIds);
        _setTokenURI(_tokenIds, _URI);
    }
    
    // function TotalSupply(uint supply) external
    // {
    //     uint totalSupply = supply;
    // }


    // Restriction binding

    // If item exists
    modifier ItemExists(uint256 id) {
        require(_artItems[id].exists, 'Not Available'); 
        _;
    }
    // Restrict if owner is calling 
    modifier notForOwner(uint256 id ) {
        ArtItem memory artItem = _artItems[id];
        if (msg.sender == artItem.seller) revert(); 
        _;
    }
    // Should Auction only if it is not cancelled
    modifier Auclive() {
        if (cancelled) revert();
        _;
    }
    // Owner
    modifier onlyOwner(uint256 id) {
        ArtItem memory artItem = _artItems[id];
        require(msg.sender != artItem.seller,'Only Owner');
        if (msg.sender != artItem.seller) revert();
        _;
    }
    // Minimum bid
    modifier minBid(uint256 id) {
        ArtItem memory artItem = _artItems[id];
        if (msg.value < artItem.minBid) revert();
        _;
    }

//  Function to add Item
    function addArtItem(uint256 price, string memory tokenUri,uint _bidincrement) public {
        require(price >= 0, 'Price should be greator then 0 ');

        _artItemsIds++;
        _artItems[_artItemsIds] = ArtItem(payable(msg.sender), price, tokenUri, true, _bidincrement);
    }
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
// getArt function
    function getArtItem(uint256 id) public view ItemExists(id)
    returns (
        uint256,
        uint256,
        string memory,
        uint256
    ) {
        ArtItem memory artItem = _artItems[id];
        Bid memory Auc = bid[id];
        return (id, artItem.minBid, artItem.tokenURI, Auc.highestBid);
    }
    // Auction functions
    function cancelAuction(uint256 id) public payable onlyOwner(id)
    Auclive()
    returns (bool success)
    {
        cancelled = true;

        if(auctionStarted == true) // mint token if auction is started
        {
            ArtItem memory artItem = _artItems[id];
            Bid storage cancelBid = bid[id];
            _tokenIds++;
            _safeMint(msg.sender, _tokenIds);
            _setTokenURI(_tokenIds, artItem.tokenURI);
            // auction owner should be allowed to withdraw the highestBid

            if (cancelBid.highestBid == 0) revert();
            fundsByBidder[id][cancelBid.highestBidder] -= cancelBid.highestBid;
            // send the funds
            if (payable(msg.sender).send(cancelBid.highestBid)) revert();
        }
        emit LogCancelled();
        return true;
    }
// Place the Bid
    function placeBid(uint256 id) public payable Auclive notForOwner(id) 
        minBid(id) returns(bool success) 
    {// revert if amount is 0
        require (msg.value == 0,'amount should be > 0');
        // Will be modify in future

        Bid storage placebid = bid[id];
        auctionStarted = true;
        ArtItem memory artItem = _artItems[id];

        uint newBid = fundsByBidder[id][msg.sender] + msg.value;

        // if user is not willing to give more than current bid so what's the purpose of making it Auction
        if (newBid <= placebid.highestBid) revert();

        // before updating the the fundsByBidder we will check if msg.sender is increaseing its own bid 
        uint highestbid = fundsByBidder[id][placebid.highestBidder];

        fundsByBidder[id][msg.sender] = newBid;

        if (newBid <= highestbid) {

            if(newBid+artItem.bidIncrement > highestbid) {
                placebid.highestBid = highestbid;
            } else {
                placebid.highestBid = newBid+artItem.bidIncrement;
            } 

        } else {
 // if msg.sender is already the highest bidder, they must simply be wanting to raise
    // their maximum bid, in which case we shouldn't increase the highestBindingBid.

// if the user is NOT highestBidder, and has overbid highestBid completely, we set them
    // as the new highestBidder and recalculate highestBindingBid.  
              if(msg.sender != placebid.highestBidder) {
                  placebid.highestBidder = payable(msg.sender);
                  if(newBid + artItem.bidIncrement > highestbid) {
                      if(firstTime == false)
                      placebid.highestBid = highestbid;
                else {
                    placebid.highestBid = artItem.minBid + artItem.bidIncrement;
                    firstTime == true;
                }
                  }
                  else {
                      placebid.highestBid = newBid + artItem.bidIncrement;
                  }
              }
                    highestbid = newBid;
        }
        // emitting event and updating to true
       emit LogBid(msg.sender, newBid, placebid.highestBidder, highestbid, placebid.highestBid);
       return true;
    }
// withDrawl function 
    function Withdrawal(uint256 id) public payable notForOwner(id) returns(bool success) 
    {
        require(cancelled == true);
        require(auctionStarted== true);
        address payable withdrawalAccount;
        uint WithdrawalAmount;
        Bid storage wBid = bid[id];
    // the highest bidder should only be allowed to withdraw the difference between their
        // highest bid and the highestBindingBid
            if(msg.sender == wBid.highestBidder) {
                withdrawalAccount = wBid.highestBidder;
                WithdrawalAmount = fundsByBidder[id][wBid.highestBidder];
            }
        else {
            // anyone who participated but not win the Auction can withdrawal their full amount 
            withdrawalAccount = payable(msg.sender);
            WithdrawalAmount = fundsByBidder[id][withdrawalAccount];

        }    
        if(WithdrawalAmount == 0) revert();

        fundsByBidder[id][withdrawalAccount] -= WithdrawalAmount;
// send the fund
        if(!payable(msg.sender).send(WithdrawalAmount)) revert();

        emit LogWithdrawal(msg.sender, withdrawalAccount, WithdrawalAmount);

        return true;
    }    
}