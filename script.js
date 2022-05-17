let seriousBusinessPerson = {
  hourlyRate: 250,
  hours: 160,
  taxRate: .35,
  calculateProfit: function(){
    return this.hourlyRate * this.hours * (1- this.taxRate)
  }
  calculateTaxesHeld: function(){
    return this.hourlyRate * this.hours - this.calculateProfit()
  }
}