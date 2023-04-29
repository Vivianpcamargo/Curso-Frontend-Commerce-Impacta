import styles from '../styles/Products.module.css'

function Installment(props) {
  const fees = props.Installment.hasFee ? 'com juros' : 'sem juros';

  return (
    <p>
      em {props.Installment.number}x de R$ {props.Installment.total} {fees}
    </p>
  );
}

function ProductListItem(props) {
  const defaultProductImage = 'https://via.placeholder.com/150';

  return (
    <div className={styles.rowItem}>
      <img src={defaultProductImage} className='flex-shrink-0 me-3' />
      <div className={styles.itemText}>
        <a href='#' className='stretched-link'>
          <h3 className='mt-0'>{props.product.title}</h3>
        </a>
        <h4>R$ {props.product.amount}</h4>
        <Installment Installment={props.product.installments} />
      </div>
    </div>
  );
}

export default function ProdutsForSaleList() {
  const json_products = [
    {
      title: 'Caneca Personalizada de Porcelada',
      amount: 123.45,
      installments: { number: 3, total: 41.15, hasFee: true },
    },
    {
      title: 'Caneca de Tulipa',
      amount: 789.45,
      installments: { number: 6, total: 41.15 },
    },
  ];

  const products = json_products.map((x, index) => (
    <ProductListItem product={x} key={index} />
  ));

  return <div className={styles.container}>{products}</div>;
}