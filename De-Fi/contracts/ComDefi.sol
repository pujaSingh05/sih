// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;
import "./tokens/IERC20.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";


interface CTokenInterface {
  function mint(uint mintAmount) external returns (uint);
  function redeem(uint redeemTokens) external returns (uint);
  function redeemUnderlying(uint redeemAmount) external returns (uint);
  function borrow(uint borrowAmount) external returns (uint);
  function repayBorrow(uint repayAmount) external returns (uint);
  function underlying() external view returns(address);
}

interface PriceOracleInterface {
  function getUnderlyingPrice(address asset) external view returns(uint);
}

interface ComptrollerInterface {
  function enterMarkets(address[] calldata cTokens) external returns (uint[] memory);
  function getAccountLiquidity(address owner) external view returns(uint, uint, uint);
}


contract ComDefi{
    ComptrollerInterface public Comptroller;
    PriceOracleInterface public PriceOracle;
    CTokenInterface public CToken;

    constructor(address _comptroller,address _priceoracle){
        Comptroller = ComptrollerInterface(_comptroller);
        PriceOracle = PriceOracleInterface(_priceoracle);
    }
    // function to supply amount
    function supply(address ctokenAddress, uint underlyingAmount)
       public  {
        CTokenInterface ctoken = CTokenInterface(ctokenAddress);
        address underlyingAddress = ctoken.underlying();
        IERC20(underlyingAddress).approve(ctokenAddress, underlyingAmount);
        uint result = ctoken.mint(underlyingAmount); // instance 

        require(
          result == 0 , // 1 => error 
          "cToken.mint is not working"
          ); 
    }
    // function to redeem the token
    function redeem(address ctokenAdress, uint ctokenAmount) 
      external {
        CTokenInterface ctoken = CTokenInterface(ctokenAdress);
        uint result = ctoken.redeem(ctokenAmount);

        require(
          result == 0, 
          'ctoken.redeem is not working '
          );
    }
    // To enter the market
    function enterMarket(address ctokenAddress) 
      external {
      address[] memory markets = new address[](1);
      markets[0] = ctokenAddress;
      uint[] memory results = Comptroller.enterMarkets(markets);

      require(
        results[0] == 0,
       'comptroller.entermarket is not working'
       );
    }
    // function to borrow 
    function borrow(address ctokenAddress, uint borrowAmount) 
      external {
      CTokenInterface ctoken = CTokenInterface(ctokenAddress);
      uint result = ctoken.borrow(borrowAmount);

      require(
        result == 0, 
        'ctoken.borrow is not working;'
      );
    }
    // function to repay borrowed amount
    function repaye(address ctokenAddress, uint repayAmount)
      external {
        CTokenInterface ctoken = CTokenInterface(ctokenAddress);
        address underlyingAddress = ctoken.underlying();
        IERC20(underlyingAddress).approve(ctokenAddress, repayAmount);
        uint result = ctoken.repayBorrow(repayAmount);

        require(
          result == 0, 
          'ctoken.repayBorrow is not working;'
        );
      }
      // fuction to get maxBorrow amount
      function getMaxBorrow(address ctokenAddress)
        external view returns (uint)
        {
          (uint result, uint liquidity, uint shortFall) = Comptroller.getAccountLiquidity(address(this));

          require(
            result == 0, 
            'Comptroller.getAccountLiquidity is not working;'
            );

          require(
            liquidity > 0,
            'account does not have collateral'
            );

          require(
            shortFall == 0,
            'account underWater'
            );  

          uint underlyingPrice = PriceOracle.getUnderlyingPrice(ctokenAddress);

          return liquidity / underlyingPrice ;  
        }

}