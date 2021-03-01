//ThisKeyword Examples//
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  console.log(robot.provideInfo())


  const nume = {
    firstName : 'Orian',
    lastName : 'Alin',
    fullName(){
        return `My First Name is ${this.firstName} and Last Name ${this.lastName}`
    }
  }
  console.log(nume.fullName())


  //Arrow Functions and this keyWord, in an arrow function we can t use this keyword//

  //Privacy Examples//
  
  const phoneBattery = {
    _baterryLevel: 100,
    recharge(){
      this._baterryLevel += 50;
      console.log(`Recharged! Energy is curently at ${this._baterryLevel}%`)
    }
  }
  phoneBattery._baterryLevel = 'very high ';
  phoneBattery.recharge();

  
  // Getters and Setters methods//
  const tabletBattery = {
    _tabletLevel: 100,
    _model: 'samsung',
    get energyLevel(){
      if(typeof this._tabletLevel === 'number'){
        return `Tablet Level is at ${this._tabletLevel}`
      } else {
        return 'Cannot retrieve energy Level'
      }
    },
  }
  console.log(tabletBattery.energyLevel)
  // Setters Methods//


  const next = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if ( typeof(num) === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }
  };
  next.numOfSensors = '100';
  console.log(next.numOfSensors)

  // Factory Functions//
  const phoneFactory = (name,model,fullName)=>{
    return{
      name: name,
      model: model,
      sound(){
        console.log(fullName)
      }
    }
  }
  const newPhone = phoneFactory('Iphone', 12,'Iphone 12');
  newPhone.sound()