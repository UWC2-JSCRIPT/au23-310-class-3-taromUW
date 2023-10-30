// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = function()
{
  let total = 0;
  let subtotal = 0;
  const taxrate = 0.1;
  let tax = 0;
  
  const args = Array.from(arguments);
  args.forEach(function(item)
  {
    subtotal += item.price
    console.log(`${item.descr} - $${item.price}`)
  })

  tax = subtotal * taxrate;
  total = subtotal + tax;

  return     console.log(`Subtotal - $${subtotal}\nTax - $${tax.toFixed(2)}\nTotal - $${total.toFixed(2)}`);
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
