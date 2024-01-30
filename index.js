// Import Web3 JS library
const Web3 = require('web3');

// Import the ABI definition of the FundDistribution
const artifact = require('../../build/contracts/FundDistribution.json');

/*const deployedContract = artifact.networks[5777];*/
const contractAddress = "0x08B6E578D2eF9F87c29F36f3F6974998c763B599";

const MIN_GAS = 1000000;

const App = 
{
    web3: null,
    contractInstance: null,
    accounts: null,

    start: async function() 
    {
        const { web3 } = this;
        // Get the accounts
        this.accounts = await web3.eth.getAccounts();

        console.log(this.accounts);

        this.contractInstance = new web3.eth.Contract(
            artifact.abi,
            contractAddress
        );
    },

    

    setBeneficiaryDetails: async function()
    {
    
        const _name = document.getElementById('setName').value;
        const _aadharNumber = document.getElementById('setAadharNumber').value;
        const _phoneNumber = document.getElementById('setPhoneNumber').value;
        const _location = document.getElementById('setLocation').value;
        const _pincode = document.getElementById('setPincode').value;
        const _bankAccountNumber = document.getElementById('setBankAccountNumber').value;
        
        console.log(_name,_aadharNumber,
                    _phoneNumber,
                    _location,
                    _pincode,
                    _bankAccountNumber);
        
                    const gas = await this.contractInstance.methods.setBeneficiaryDetails(_name,_aadharNumber,
                                                                                _phoneNumber,
                                                                                _location,
                                                                                _pincode,
                                                                                _bankAccountNumber).estimateGas
        ({
            from: this.accounts[0]
        });
        
        await this.contractInstance.methods.setBeneficiaryDetails(_name,_aadharNumber,
                                                                    _phoneNumber,
                                                                    _location,
                                                                    _pincode,
                                                                    _bankAccountNumber).send
        ({
            from: this.accounts[0], gas: Math.max(gas, MIN_GAS)
        });
    },


    getBeneficiaryDetails: async function()
    {

        const _aadharNumber = document.getElementById('inputAadharNumber').value;

        await this.contractInstance.methods.getBeneficiaryDetails(_aadharNumber).call().then(function(beneficiaryDetails)
        {
            document.getElementById("getName").innerHTML = "Name: " + beneficiaryDetails[0];
            document.getElementById("getAadharNumber").innerHTML = "Aadhar Number: " + beneficiaryDetails[1];
            document.getElementById("getPhoneNumber").innerHTML = "Phone Number: " + beneficiaryDetails[2];
            document.getElementById("getLocation").innerHTML = "Location: " + beneficiaryDetails[3];
            document.getElementById("getPincode").innerHTML = "Pincode: " + beneficiaryDetails[4];
            document.getElementById("getBankAccountNumber").innerHTML = "Account Number: " + beneficiaryDetails[5];
            document.getElementById("getBankAccountBalance").innerHTML = "Account Balance: " + beneficiaryDetails[6];
        });
    },


    setFundTransferingDetailsOfCentral: async function()
    {
        const _stateName = document.getElementById('setStateName').value;
        const _cause = document.getElementById('setCause').value;
        const _bankAccountNumberOfCentral = document.getElementById('setBankAccountNumberOfCentral').value;
        const _bankAccountNumberOfState = document.getElementById('setBankAccountNumberOfState').value;
        const _ifscNumberOfStateBankAccount = document.getElementById('setIfscNumberOfStateBankAccount').value;
        const _transferingAmountOfCentral = document.getElementById('setTransferingAmountOfCentral').value;
        const _centralsAccountNumberPin = document.getElementById('setCentralsAccountNumberPin').value;
        
        console.log(_stateName,_cause,
                    _bankAccountNumberOfCentral,
                    _bankAccountNumberOfState,
                    _ifscNumberOfStateBankAccount,
                    _transferingAmountOfCentral,
                    _centralsAccountNumberPin);

        const gas = await this.contractInstance.methods.setFundTransferingDetailsOfCentral(_stateName,_cause,
                                                                                            _bankAccountNumberOfCentral,
                                                                                            _bankAccountNumberOfState,
                                                                                            _ifscNumberOfStateBankAccount,
                                                                                            _transferingAmountOfCentral,
                                                                                            _centralsAccountNumberPin).estimateGas                                                                            
        ({
            from: this.accounts[0]
        });

        await this.contractInstance.methods.setFundTransferingDetailsOfCentral(_stateName,_cause,
                                                                                _bankAccountNumberOfCentral,
                                                                                _bankAccountNumberOfState,
                                                                                _ifscNumberOfStateBankAccount,
                                                                                _transferingAmountOfCentral,
                                                                                _centralsAccountNumberPin).send
        ({
            from: this.accounts[0], gas: Math.max(gas, MIN_GAS)
        });
    },


    getTransferredFundDetailsOfCentral: async function()
    {
        const _stateName = document.getElementById('inputStateName').value;

        await this.contractInstance.methods.getTransferredFundDetailsOfCentral(_stateName).call().then(function(transferredFundDetailsOfCentral)
        {
            document.getElementById("getStateName").innerHTML = "State Name: " + transferredFundDetailsOfCentral[0];
            document.getElementById("getCause").innerHTML = "Cause: " + transferredFundDetailsOfCentral[1];
            document.getElementById("getBankAccountNumberOfCentral").innerHTML = "Bank Account Number Of Central: " + transferredFundDetailsOfCentral[2];
            document.getElementById("getBankAccountNumberOfState").innerHTML = "Bank Account Number Of State: " + transferredFundDetailsOfCentral[3];
            document.getElementById("getIfscNumberOfStateBankAccount").innerHTML = "Ifsc Number Of State Bank Account: " + transferredFundDetailsOfCentral[4];
            document.getElementById("getTransferingAmountOfCentral").innerHTML = "Transferred Amount Of Central: " + transferredFundDetailsOfCentral[5];
        });
    },

    
    setFundTransferingDetailsOfState: async function()
    {
        const _stateName = document.getElementById('setStateName').value;
        const _cause = document.getElementById('setCause').value;
        const _bankAccountNumberOfState = document.getElementById('setBankAccountNumberOfState').value;
        const _ifscNumberOfStateBankAccount = document.getElementById('setIfscNumberOfStateBankAccount').value;
        const _transferingAmountOfState = document.getElementById('setTransferingAmountOfState').value;
        const _statesAccountNumberPin = document.getElementById('setStatesAccountNumberPin').value;
        
        console.log(_stateName,_cause,
                    _bankAccountNumberOfState,
                    _ifscNumberOfStateBankAccount,
                    _transferingAmountOfState,
                     _statesAccountNumberPin);

        const gas = await this.contractInstance.methods.setFundTransferingDetailsOfState(_stateName,_cause,
                                                                                        _bankAccountNumberOfState,
                                                                                        _ifscNumberOfStateBankAccount,
                                                                                        _transferingAmountOfState,
                                                                                        _statesAccountNumberPin).estimateGas
        ({
            from: this.accounts[0]
        });
        
        await this.contractInstance.methods.setFundTransferingDetailsOfState(_stateName,_cause,
                                                                            _bankAccountNumberOfState,
                                                                            _ifscNumberOfStateBankAccount,
                                                                            _transferingAmountOfState,
                                                                            _statesAccountNumberPin).send

        ({
            from: this.accounts[0], gas: Math.max(gas, MIN_GAS)
        });
    },


    getTransferredFundDetailsOfState: async function()
    {
        const _stateName = document.getElementById('inputStateName').value;

        await this.contractInstance.methods.getTransferredFundDetailsOfState(_stateName).call().then(function(transferredFundDetailsOfState)
        {
            document.getElementById("getStateName").innerHTML = "State Name: " + transferredFundDetailsOfState[0];
            document.getElementById("getCause").innerHTML = "Cause: " + transferredFundDetailsOfState[1];
            document.getElementById("getBankAccountNumberOfState").innerHTML = "Bank Account Number Of State: " + transferredFundDetailsOfState[2];
            document.getElementById("getIfscNumberOfStateBankAccount").innerHTML = "Ifsc Number Of State Bank Account: " + transferredFundDetailsOfState[3];
            document.getElementById("getTransferingAmountOfState").innerHTML = "Transferred Amount Of Central: " + transferredFundDetailsOfState[4];
            document.getElementById("getAccountBalanceOfState").innerHTML = "Account Balance Of State: " + transferredFundDetailsOfState[5];
        });
    },


    setDistributionOfFund: async function()
    {
        const _stateName = document.getElementById('setInputStateName').value;
        const _pincode = document.getElementById('setPincode').value;
        
        console.log(_stateName, _pincode);
        
        const gas = await this.contractInstance.methods.setDistributionOfFund(_stateName, _pincode).estimateGas
        ({
            from: this.accounts[0]
        });
        
        await this.contractInstance.methods.setDistributionOfFund(_stateName, _pincode).send
        ({
            from: this.accounts[0], gas: Math.max(gas, MIN_GAS)
        });
    },

}

window.App = App;

window.addEventListener("load", function() {
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545"),
    );

  App.start();
});




/* 

    function FundTransferingDetailsOfState(string memory _stateName, string memory _cause,
    uint _bankAccountNumberOfstate,uint _ifscNumberOfStateBankAccount,
    uint _transferingAmountOfState,uint _statesAccountNumberPin)

    */


/* 

    <p>State Name<input type="text" id="_stateName" placeholder="Enter State Name"></p>
        <p>Cause<input type="text" id="_cause" placeholder="Enter Cause"></p>
        <p>Bank Account Number Of Central<input type="number" id="_bankAccountNumberOfCentral" placeholder="Enter Bank Account Number Of Central"></p>
        <p>Bank Account Number Of State<input type="number" id="_bankAccountNumberOfstate" placeholder="Enter Bank Account Number Of State"></p>
        <p>IFSC Number Of State Bank Account<input type="number" id="_ifscNumberOfStateBankAccount" placeholder="Enter IFSC Number Of State Bank Account"></p>
        <p>Transfering Amount Of Central<input type="number" id="_transferingAmountOfCentral" placeholder="Enter Transfering Amount Of Central"></p>
        <p>Central's Bank Account Number Pin<input type="number" id="_centralsAccountNumberPin" placeholder="Enter Central's Bank Account Number Pin"></p>

 */





/* 
(string memory _stateName, string memory _cause,
    uint _bankAccountNumberOfCentral, uint _bankAccountNumberOfstate,
    uint _ifscNumberOfStateBankAccount, uint _transferingAmountOfCentral,uint _centralsAccountNumberPin)
public 
*/



/* string memory _name,
                                    uint _aadharNumber,
                                    uint  _phoneNumber,
                                    string memory _location,
                                    uint _pincode,
                                    uint _bankAccountNumber 
*/



/* 

_stateName,_cause, _bankAccountNumberOfCentral,_bankAccountNumberOfState, _ifscNumberOfStateBankAccount,_transferingAmountOfCentral, _centralsAccountNumberPin

_stateName,_cause,_bankAccountNumberOfState,_ifscNumberOfStateBankAccount, _transferingAmountOfState,_statesAccountNumberPin 
*/

/*

    getAllAadharNumbers: async function() {
        const allAadharNumbers = await this.contractInstance.methods.getAllAadharNumbers().call();
        let aadharNumber = " ";
        allAadharNumbers.forEach(this.getAllAadharNumbers);



        
        /* 
        const numbers = [45, 4, 9, 16, 25];
        let txt = "";
        numbers.forEach(myFunction);

        function myFunction(value) {
        txt += value + "<br>";
}
*/