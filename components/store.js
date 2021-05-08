import { Component } from "react";

class ConductTransaction extends Component {
  state = { recipient: "", amount: 0, products: [{cost: 10, name: "Product", shop: "Farsi Street", quantity: 4},
{cost: 10, name: "Product", shop: "Farsi Street"},{cost: 10, name: "Product", shop: "Farsi Street", quantity: 4}] };

  componentDidMount() {}

  updateProduct = (event) => {
    this.setState({ product: event.target.value });
  };

  updateAmount = (event) => {
    this.setState({ amount: Number(event.target.value) });
  };

  // conductTransaction = () => {
  //   const { product, amount } = this.state;
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
  //             product,
  //             amount,
  //           });
  //         } else {
  //           transaction = this.props.entity.wallet.createTransaction({
  //             product,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-3/4 sm:w-5/6 mx-auto">
          {this.state.products.map((product) => (
            <div className="m-2 rounded-xl w-full h-48 border-red-600 transition duration-1000 border-2 hover:border-4 ">
		{product.name + "\n" + product.cost + "\n" + product.shop}
	    </div>
          ))}
        </div>
      </>
    );
  }
}

export default ConductTransaction;
