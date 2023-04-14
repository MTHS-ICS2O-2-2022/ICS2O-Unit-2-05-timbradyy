// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates your pay depending on the amount of hours you work (including tax).
 */
function calculate() {
  // input
  const pay = parseInt(document.getElementById('pay-per-hour').value)
  const hours_worked = parseInt(document.getElementById('hours-worked').value)

  // process
  const net_payment = (hours_worked * pay) * (1.00 - 0.18)
  const taxes = (hours_worked * pay) * 0.18

  // output
  document.getElementById('net-payment').innerHTML = `Your pay will be: $ ${net_payment.toFixed(2)}`
  document.getElementById('tax').innerHTML = `the government will take: $ ${taxes.toFixed(2)}`
}