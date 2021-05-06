import { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

class ConductTransaction extends Component {
  state = { recipient: "", amount: 0, knownAddresses: [] };

  componentDidMount() {
  }

  updateRecipient = (event) => {
    this.setState({ recipient: event.target.value });
  };

  updateAmount = (event) => {
    this.setState({ amount: Number(event.target.value) });
  };

  // conductTransaction = () => {
  //   const { recipient, amount } = this.state;
  //   fetch(`${document.location.origin}/api/blocks`)
  //     .then((response) => response.json())
  //     .then((chain) => (this.props.entity.blockchain = chain))
  //     .then(() => {
  //       let transaction = this.props.entity.transactionPool.existingTransaction(
  //         {
  //           inputAddress: this.props.entity.wallet.publicKey,
  //         }
  //       );
  //       try {
  //         if (transaction) {
  //           transaction.update({
  //             senderWallet: this.props.entity.wallet,
  //             recipient,
  //             amount,
  //           });
  //         } else {
  //           transaction = this.props.entity.wallet.createTransaction({
  //             recipient,
  //             amount,
  //             chain: this.props.entity.blockchain.chain,
  //           });
  //         }
  //         return transaction;
  //       } catch (error) {
  //         return false;
  //       }
  //     })
  //     .then((transaction) => {
  //       if (transaction) {
  //         alert("yaay! its a success");
  //         this.props.entity.transactionPool.setTransaction(transaction);
  //         fetch(`${document.location.origin}/api/transact`, {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(transaction),
  //         });
  //         history.push("/transaction-pool");
  //       } else {
  //         alert("oops! Tht didnt work");
  //       }
  //     });
  // };

  render() {
    return (
      <>
        <h3 className="text-gray-600 my-8 px-auto">Conduct a Transaction</h3>
        <br />
        <div className="px-auto">
        <FormGroup className="my-8">
          <FormControl
            className="rounded-full px-6 py-2 bg-gray-200 text-gray-600"
            input="text"
            placeholder="recipient"
            value={this.state.recipient}
            onChange={this.updateRecipient}
          />
        </FormGroup>
        <FormGroup className="my-8">
          <FormControl
            className="rounded-full px-6 py-2 bg-gray-200 text-gray-600"
            input="number"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.updateAmount}
          />
        </FormGroup>
        <div>
          <Button
            bsstyle="danger"
            className="bg-gray-100 rounded-full px-8 py-2 text-gray-700 no-underline hover:no-underline hover:bg-red-600 hover:text-white"
            onClick={this.conductTransaction}
          >
            Submit
          </Button>
        </div>
        </div>
      </>
    );
  }
}

export default ConductTransaction;
