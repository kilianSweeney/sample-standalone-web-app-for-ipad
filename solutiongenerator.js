$= jQuery.noConflict();
$(function(){

    var questions = [
            {text:'Type of Application?',id:'appType',answers:[{name: 'Commercial',},{ name: 'Gated Community'},{ name: 'Industrial'},{ name: 'Apartment/Condo with Parking'},{ name: 'Off-Street Parking'},{ name: 'Rural/Ranch'},{ name: 'Light Commercial'},{ name: 'Single Family Residence'}],ask:null},
            {text:'What type of Gate is it?',id:'entranceType',answers:[{name:'Slide'},{name:'Swing'},{name:'Barrier'},{name:'Overhead'}],ask:null},
            {text:'Number of Employees / Residents?',id:'userNum',answers:[{name:'Less than 25'},{name:'Less than 90'},{name:'Less than 200'},{name:'Less than 1000'},{name:'Less than 2000'},{name:'More than 2000'}],ask:null},
            {text:'How many entrances?',id:'entranceNum',answers:[{name:'1'},{name:'2'},{name:'3 - 4'},{name:'more than 4'}],ask:null},
            {text:'Anticipated use (or cycles per day)?',id:'cyclesPerDay',answers:[{name:'Light (< 100/day)'},{name:'Medium (< 300/day)'},{name:'Heavy (< 800/day)'},{name:'Continuous (800+/day)'}],ask:null},
            {text:'Do you want residents to be able to communicate with visitors via speaker system at the entry?',id:'speakerSystem',answers:[{name:'Yes'},{name:'No'}],ask:null},
            {text:'Do you want the ability to track and see action history?',id:'actionHistory',answers:[{name:'Not important'},{name:'Yes, and I use POTS'},{name:'Yes, and I use IP '}],ask:null},
            {text:'Which access methods do you want? (check all that apply)?',id:'controlAccess',answers:[{name:'Codes / PINs'},{name:'Cards / Fobs / RFID Tags'},{name:'Remotes'},{name:'Credentialed Remotes'}],ask:null},
            {text:'Do you want the ability to monitor or operate remotely via the MyQ smartphone app?',id:'smartPhone',answers:[{name:'Yes'},{name:'No'}],ask: ['Light Commercial','Single Family Residence','Rural/Ranch']},
            {text:'Do you need Battery Backup?',id:'batteryBackup',answers:[{name:'Yes'},{name:'No'}],ask:null},
            {text:'Do you need Solar Power?',id:'solarPower',answers:[{name:'Yes'},{name:'No'}],ask:null}
        ],
        products = [
            {id:'csw24ul', type: 'High-Traffic Swing Gate Operator', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:true},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','SP20W12V']},
            {id:'rsw12ul', type: 'Residential Swing Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:true},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:false},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','SP10W12V']},
            {id:'CSW200', type: 'Commercial Swing Gate Operator', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:true},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:false},{name:'Less than 90',value:false},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:false},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL']},
            {id:'csl24ul', type: 'Commercial Slide Gate Operator', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:true},{name:'Swing',value:false},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:false},{name:'Less than 90',value:false},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','WR4','WS4','SP20W12V']},
            {id:'rsl12ul', type: 'Residential Slide Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:true},{name:'Swing',value:false},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:false},{name:'Heavy (< 800/day)',value:false},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','WR4','WS4','SP10W12V']},
            {id:'la500pkgul', type: 'Residential Linear Actuator Swing', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:true},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:false},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','SP10W12V']},
            {id:'SL3000', type: 'Commercial High-Traffic Slide Gate Operator', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:true},{name:'Swing',value:false},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:false},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL']},
            {id:'SL585', type: 'Industrial Slide Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:true},{name:'Swing',value:false},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:false},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL']},
            {id:'SL595', type: 'Industrial Slide Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:true},{name:'Swing',value:false},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:false},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL']},
            {id:'LA400PKGUL', type: 'Residential Linear Actuator Swing', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:true},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:false},{name:'Heavy (< 800/day)',value:false},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','SP10W12V']},
            {id:'LA412PKGUL', type: 'Residential Linear Actuator Swing', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:true},{name:'Barrier',value:false},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:false},{name:'Heavy (< 800/day)',value:false},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:false},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['LMRRUL','LMTBUL','LMWEKITU','L504AL','SP10W12V']},
            {id:'HCTDCUL', type: 'Specialty Overhead Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:false},{name:'Barrier',value:false},{name:'Overhead',value:true}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:true},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'LOOPDETLM',accessories:['CPSUN4G','LMWEKITU','L50','L50E','L50CHAL']},
            {id:'MATDCBB3', type: 'Mega Arm Tower Barrier Gate Operator', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:false},{name:'Barrier',value:true},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:false},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LD7LP',accessories:['AOMRON','MALED12','MBAT']},
            {id:'MASTDCBB3', type: 'High Traffic Commercial DC-Powered Barrier Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:false},{name:'Barrier',value:true},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:false},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LD7LP',accessories:['AOMRON','']},
            {id:'MTF', type: 'Integrated Barrier Gate Operator', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:false},{name:'Barrier',value:true},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:false},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LD7LP',accessories:['AOMRON','MALED12','MBAT']},
            {id:'MTS', type: 'Integrated Barrier Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:false},{name:'Barrier',value:true},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:true}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:false},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:true},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LD7LP',accessories:['AOMRON','MALED12','MBAT']},
            {id:'BG790', type: 'Industrial-Duty Wishbone Arm Barrier Gate Operator', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:false},{name:'Swing',value:false},{name:'Barrier',value:true},{name:'Overhead',value:false}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:true},{name:'Medium (< 300/day)',value:true},{name:'Heavy (< 800/day)',value:true},{name:'Continuous (800+/day)',value:false}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:null},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:null}],smartPhone:[{name:'Yes',value:false},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:false},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'LD7LP',accessories:['AOMRON','K651208']},
//            {id:'ACXL', type: 'Internet Protocol Access Control', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:false},{name:'Less than 90',value:false},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:true}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:false},{name:'No',value:false}],actionHistory:[{name:'Not important',value:false},{name:'Yes, and I use POTS',value:false},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:false},{name:'Remotes',value:false},{name:'Credentialed Remotes',value:false}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'',accessories:['']},
//            {id:'ACEXT', type: 'Internet Protocol Door Controller', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:true}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:false},{name:'No',value:false}],actionHistory:[{name:'Not important',value:false},{name:'Yes, and I use POTS',value:false},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:false},{name:'Remotes',value:false},{name:'Credentialed Remotes',value:false}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'IPAC', type: 'Internet Protocol Access Control', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:true}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:true},{name:'No',value:false}],actionHistory:[{name:'Not important',value:false},{name:'Yes, and I use POTS',value:false},{name:'Yes, and I use IP',value:true}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['LMSC1000']},
            {id:'IPACIPDCC', type: 'Internet Protocol Door Controller', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:true}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:false},{name:'No',value:true}],actionHistory:[{name:'Not important',value:false},{name:'Yes, and I use POTS',value:false},{name:'Yes, and I use IP',value:true}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['LMSC1000']},
            {id:'EL2000SS', type: 'Telephone Entry/Access Control System', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:false}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:true},{name:'No',value:false}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:true},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['LMSC1000']},
            {id:'EL25', type: 'Telephone Entry/Access Control System', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:false}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:true},{name:'No',value:false}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:true},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['LMSC1000']},
            {id:'EL1SS', type: 'Telephone Entry/Access Control System', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:false},{name:'more than 4',value:false}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:true},{name:'No',value:false}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:true},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:false},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:false}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'KPW5', type: 'Wireless Keypad', appType:[{ name: 'Commercial',value:false},{ name: 'Gated Community',value:false},{ name: 'Industrial',value:false},{ name: 'Apartment/Condo with Parking',value:false},{ name: 'Off-Street Parking',value:false},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:false},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:true},{name:'2',value:false},{name:'3 - 4',value:false},{name:'more than 4',value:false}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:true}],actionHistory:[{name:'Not important',value:true},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:false}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'KPW250', type: 'Wireless Keypad', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:false},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:true},{name:'2',value:false},{name:'3 - 4',value:false},{name:'more than 4',value:false}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:true}],actionHistory:[{name:'Not important',value:true},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:null},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:false}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:true},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'KPR2000', type: 'Single Entry Access Control Keypad and Proximity Reader', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:true},{name:'2',value:true},{name:'3 - 4',value:true},{name:'more than 4',value:true}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:true}],actionHistory:[{name:'Not important',value:true},{name:'Yes, and I use POTS',value:false},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:false},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'STAR1000', type: 'Commercial Receiver', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:false},{name:'More than 2000',value:false}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:true}],actionHistory:[{name:'Not important',value:false},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:false},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:false}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'PPWR', type: 'Credentialed Access Receiver', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:true},{name:'Less than 90',value:true},{name:'Less than 200',value:true},{name:'Less than 1000',value:true},{name:'Less than 2000',value:true},{name:'More than 2000',value:true}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:true}],actionHistory:[{name:'Not important',value:false},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:false}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'811LM', type: 'One-Button Remote Control', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:null},{name:'Less than 90',value:null},{name:'Less than 200',value:null},{name:'Less than 1000',value:null},{name:'Less than 2000',value:null},{name:'More than 2000',value:null}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'892LT / 894LT', type: '2/4 Button Remote Controls', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:true},{ name: 'Light Commercial',value:true},{ name: 'Single Family Residence',value:true}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:null},{name:'Less than 90',value:null},{name:'Less than 200',value:null},{name:'Less than 1000',value:null},{name:'Less than 2000',value:null},{name:'More than 2000',value:null}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:true},{name:'Cards / Fobs / RFID Tags',value:true},{name:'Remotes',value:true},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'Passport MAX', type: 'Credentialed Receiver Remote Control', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:null},{name:'Less than 90',value:null},{name:'Less than 200',value:null},{name:'Less than 1000',value:null},{name:'Less than 2000',value:null},{name:'More than 2000',value:null}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:false},{name:'Remotes',value:null},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
            {id:'Passport Lite', type: 'Credentialed Receiver Remote Control', appType:[{ name: 'Commercial',value:true},{ name: 'Gated Community',value:true},{ name: 'Industrial',value:true},{ name: 'Apartment/Condo with Parking',value:true},{ name: 'Off-Street Parking',value:true},{ name: 'Rural/Ranch',value:false},{ name: 'Light Commercial',value:false},{ name: 'Single Family Residence',value:false}],entranceType:[{name:'Slide',value:null},{name:'Swing',value:null},{name:'Barrier',value:null},{name:'Overhead',value:null}],userNum:[{name:'Less than 25',value:null},{name:'Less than 90',value:null},{name:'Less than 200',value:null},{name:'Less than 1000',value:null},{name:'Less than 2000',value:null},{name:'More than 2000',value:null}],entranceNum:[{name:'1',value:null},{name:'2',value:null},{name:'3 - 4',value:null},{name:'more than 4',value:null}],cyclesPerDay:[{name:'Light (< 100/day)',value:null},{name:'Medium (< 300/day)',value:null},{name:'Heavy (< 800/day)',value:null},{name:'Continuous (800+/day)',value:null}],speakerSystem:[{name:'Yes',value:null},{name:'No',value:null}],actionHistory:[{name:'Not important',value:null},{name:'Yes, and I use POTS',value:null},{name:'Yes, and I use IP',value:null}],controlAccss:[{name:'Codes / PINs',value:false},{name:'Cards / Fobs / RFID Tags',value:false},{name:'Remotes',value:null},{name:'Credentialed Remotes',value:true}],smartPhone:[{name:'Yes',value:null},{name:'No',value:null}],batteryBackup:[{name:'Yes',value:null},{name:'No',value:null}],solarPower:[{name:'Yes',value:null},{name:'No',value:null}],loop:'',accessories:['']},
        ],
        itemURLS = [
          {id:'loopdetlm',url:"https://www.liftmaster.com/for-homes/accessories/gate-operator/model-loopdetlm"},
          {id:'ld7lp',url:"https://www.liftmaster.com/for-homes/accessories/gate-operator/model-ld7lp"},{id:"csw24ul",url:"https://www.liftmaster.com/csw24ul-24vdc-swing-gate-operator/p/CSW24UL"},
          {id:"LMRRUL",url:"https://www.liftmaster.com/lmrrul-photo-eye/p/LMRRUL"},
          {id:"LMTBUL",url:"https://www.liftmaster.com/lmtbu-photo-eye/p/LMTBU"},
          {id:"LMWEKITU",url:"https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-lmwekitu"},{id:"L504AL",url:"https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-l504al"},{id:"rsw12ul",url:"https://www.liftmaster.com/rsw12ul-swing-gate-operator/p/RSW12UL"},{id:"csl24ul",url:"https://www.liftmaster.com/24vdc-high-traffic-commercial-slide-gate-operator/p/CSL24UL"},{id:"WR4",url:"https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-wr4"},{id:"WS4",url:"https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-ws4"},{id:"rsl12ul",url:"https://www.liftmaster.com/rsl12ul/p/RSL12UL"},{id:"la500pkgul",url:"https://www.liftmaster.com/la500pkgu-linear-actuator-swing-gate-operators/p/LA500PKGU"},{id:"LA400PKGUL",url:"https://www.liftmaster.com/la400pkgu-dc-linear-actuator-swing-gate-operators/p/LA400PKGU"},{id:"LA412PKGUL",url:"https://www.liftmaster.com/for-homes/gate-operators/swing/model-LA412PKGUL"},{id:"HCTDCUL",url:"https://www.liftmaster.com/gate-operators/p/HCTDCUL"},{id:"MATDCBB3",url:"https://www.liftmaster.com/for-businesses/gate-operators/barrier-overhead/model-matdcbb3"},{id:"AOMRON",url:"https://www.liftmaster.com/for-homes/accessories/gate-operator/model-aomron"},{id:"MASTDCBB3",url:"https://www.liftmaster.com/for-businesses/gate-operators/barrier-overhead/model-mastdcbb3"},{id:"EL2000SS",url:"https://www.liftmaster.com/for-businesses/access-control-systems/internet-enabled-telephone-entry-systems/model-el2000ss"},{id:"EL25",url:"https://www.liftmaster.com/for-homes/access-control-systems/internet-enabled-telephone-entry-systems/model-el25"},{id:"EL1SS",url:"https://www.liftmaster.com/for-homes/access-control-systems/internet-enabled-telephone-entry-systems/model-el1ss"},{id:"KPW5",url:"https://www.liftmaster.com/for-homes/access-control-systems/keypad-access-systems/model-kpw5"},{id:"KPW250",url:"https://www.liftmaster.com/for-homes/access-control-systems/keypad-access-systems/model-kpw250"},{id:"KPR2000",url:"https://www.liftmaster.com/for-homes/access-control-systems/keypad-access-systems/model-kpr2000"},{id:"PPWR",url:"https://www.liftmaster.com/for-homes/access-control-systems/receiver-systems/model-ppwr"},{id:"811LM",url:"https://www.liftmaster.com/for-businesses/commercial-door-operator-accessories/wall-controls-and-transmitters/model-811lm"},
          {id:'mtf',url:'https://www.liftmaster.com/mtf-integrated-barrier-gate/p/MTF'},
          {id:'mts',url:'https://www.liftmaster.com/mts-motorized-integrated-barrier-gate/p/MTS'},
          {id:'csw200',url:'https://www.liftmaster.com/for-homes/gate-operators/swing/model-csw200501u'},
          {id:'sl3000',url:'https://www.liftmaster.com/for-homes/gate-operators/slide/model-sl3000101u'},
          {id:'sl585',url:'https://www.liftmaster.com/for-businesses/gate-operators/slide/model-sl585501u'},
          {id:'sl595',url:'https://www.liftmaster.com/for-businesses/gate-operators/slide/model-sl595151u'},
          {id:'bg790',url:'https://www.liftmaster.com/for-businesses/gate-operators/barrier-overhead/model-bg790'},
          {id:'ipac',url:'https://www.liftmaster.com/for-businesses/access-control-systems/internet-enabled-telephone-entry-systems/model-capxl'},
          {id:'ipacipdcc',url:'https://www.liftmaster.com/for-businesses/access-control-systems/internet-enabled-telephone-entry-systems/model-cap2d'},
          {id:'star1000',url:'https://www.liftmaster.com/for-homes/access-control-systems/receiver-systems/model-star1000'},
          {id:'passport max',url:'https://www.liftmaster.com/for-businesses/accessories/access-control-systems/model-ppv3m'},
          {id:'passport lite',url:'https://www.liftmaster.com/for-businesses/accessories/access-control-systems/model-pplv'},
          {id:'892lt / 894lt',url:'https://www.liftmaster.com/for-homes/accessories/gate-operator/model-892lt'},
          {id:'l50',url:'https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-l50'},
          {id:'l50e',url:'https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-l50e'},
          {id:'l50chal',url:'https://www.liftmaster.com/for-businesses/accessories/gate-operators/model-l50chal'},
          {id:'maled12',url:'https://www.liftmaster.com/dcgateoperators-(1)#ctl00_ctl00_BodyContent_plcMain_plcZones_lt_wpzMain_LFTLayoutContainer_13_pnl'},
          {id:'ppk3m',url:'https://www.liftmaster.com/for-businesses/accessories/access-control-systems/model-ppk3m'}
        ],
        rankings = {
            operators: [
                {
                    type:'Swing', 
                    items: [
                        'csw24ul',
                        'CSW200',
                        'rsw12ul',
                        'la500pkgul',
                        'LA400PKGUL',
                        'LA412PKGUL',
                    ],
                    ruralitems: [
                        'LA412PKGUL',
                        'csw24ul',
                        'CSW200',
                        'rsw12ul',
                        'la500pkgul',
                        'LA400PKGUL',
                    ]
                },
                {
                    type:'Slide', 
                    items: [
                        'csl24ul',
                        'rsl12ul',
                        'SL3000',
                        'SL585',
                        'SL595',
                    ]
                },
                {
                    type:'Barrier', 
                    items: [
                        'MATDCBB3',
                        'MASTDCBB3',
                        'BG790',
                        'MTF',
                        'MTS',
                    ]
                },
                {
                    type:'Overhead', 
                    items: [
                        'HCTDCUL',
                    ]
                }               
            ],
            entrySystems: [
                {
                    items: [
                        'IPAC',
                        'IPACIPDCC',
                        'EL2000SS',
                        'EL25',
                        'EL1SS',
                        'KPR2000'
                    ]
                }
            ],
            keypads: [
                {
                    items: [
                        'KPW5',
                        'KPW250',
                    ]
                }
            ],
            receivers: [
                {
                    items: [
                        'PPWR',
                        'STAR1000',
                    ]
                }
            ],
            remotes: [
                {
                    items:[
                        'Passport MAX',
                        'Passport Lite',
                        '892LT',
                        '811LM'
                    ]
                }
            ]
        },
        defaultSolutions = [
            {
                type: 'Commercial',
                operators: [
                    {
                        type: 'Swing',
                        id: 'csw24ul'
                    },
                    {
                        type: 'Slide',
                        id: 'SL3000'
                    },
                    {
                        type: 'Barrier',
                        id: 'MATDCBB3'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'IPAC',
                keypads: 'KPW250',
                receivers: null,
                remotes: 'PPK3M'
            },
            {
                type: 'Light Commercial',
                operators: [
                    {
                        type: 'Swing',
                        id: 'csw24ul'
                    },
                    {
                        type: 'Slide',
                        id: 'csl24ul'
                    },
                    {
                        type: 'Barrier',
                        id: 'MATDCBB3'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'EL2000SS',
                keypads: 'KPW5',
                receivers: null,
                remotes: 'PPK3M'
            },
            {
                type: 'Industrial',
                operators: [
                    {
                        type: 'Swing',
                        id: 'csw24ul'
                    },
                    {
                        type: 'Slide',
                        id: 'SL595',
                        continous: 'csl24ul'
                    },
                    {
                        type: 'Barrier',
                        id: 'BG790'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'EL2000SS',
                keypads: 'KPW250',
                receivers: null,
                remotes: 'PPK3M'
            },
            {
                type: 'Apartment/Condo with Parking',
                operators: [
                    {
                        type: 'Swing',
                        id: 'csw24ul'
                    },
                    {
                        type: 'Slide',
                        id: 'csl24ul'
                    },
                    {
                        type: 'Barrier',
                        id: 'MATDCBB3'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'KPR2000',
                keypads: 'KPW250',
                receivers: 'PPWR',
                remotes: 'Passport Lite'
            },
            {
                type: 'Off-Street Parking',
                operators: [
                    {
                        type: 'Swing',
                        id: 'csw24ul'
                    },
                    {
                        type: 'Slide',
                        id: 'SL3000'
                    },
                    {
                        type: 'Barrier',
                        id: 'MATDCBB3'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'IPACIPDCC',
                keypads: 'KPW250',
                receivers: null,
                remotes: 'Passport Max'
            },
            {
                type: 'Gated Community',
                operators: [
                    {
                        type: 'Swing',
                        id: 'csw24ul'
                    },
                    {
                        type: 'Slide',
                        id: 'csl24ul'
                    },
                    {
                        type: 'Barrier',
                        id: 'MATDCBB3'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'IPAC',
                keypads: 'KPW250',
                receivers: null,
                remotes: 'PPK3M'
            },
            {
                type: 'Rural/Ranch',
                operators: [
                    {
                        type: 'Swing',
                        id: [
                            'LA412PKGUL',
                            'LA400PKGUL',
                            'la500pkgul',
                            'rsw12ul',
                            'csw24ul',
                        ]
                    },
                    {
                        type: 'Slide',
                        id: [
                            'rsl12ul',
                            'CSL4U'
                        ]
                    },
                    {
                        type: 'Barrier',
                        id: 'rsw12ul'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'EL1SS',
                keypads: 'KPW5',
                remotes: '892LT'
            },
            {
                type: 'Single Family Residence',
                operators: [
                    {
                        type: 'Swing',
                        id: 'la500pkgul'
                    },
                    {
                        type: 'Slide',
                        id: 'rsl12ul'
                    },
                    {
                        type: 'Barrier',
                        id: 'rsw12ul'
                    },
                    {
                        type: 'Overhead',
                        id: 'HCTDCUL'
                    },
                ],
                entrySystems: 'EL1SS',
                keypads: 'KPW5',
                remotes: '892LT'
            },
        ],
        correctAnswerCount = 0,
        questionsAsked = 1,
        questionsGiven = questions.length,
        quizIndex = -1,
        answersGiven,
        questionBox = $('#quiz-question'),
        answersBox = $('#quiz-answers'),
        answersDisplay = $('#quiz-answers-display'),
        answerGrades = $('#answer-grades'),
        answerPass = $('#answer-pass'),
        answerFail = $('#answer-fail'),
        quizResult = $('#quiz-result'),
        quizContinue = $('#quiz-continue'),
        quizBack = $('#quiz-back'),
        quizStart = $('#quiz-start'),
        quizBody = $('#quiz-body'),
        quizIntro = $('#quiz-intro'),
        quizReset = $('#quiz-reset'),
        quizQIndex = $('#quiz-q-index'),
        quizCount = $('#quiz-count'),
        quizStartOver = $('#quiz-start-over'),
        quizSubmit = $('#quiz-submit'),
        quizQwrapper = $('#quiz-qwrapper'),
        quizRwrapper = $('#quiz-rwrapper'),
        fadeInterval = 300,
        isFading = false,
        answerClick = function(e){
            if(isFading){
                e.preventDefault();
                return;
            }
            var li = e.currentTarget.tagName == 'SPAN' ? e.currentTarget.parentElement : e.currentTarget;
            $(li).children('input').each(function(item){
                if($(this).is(':checked')){
                    $(this).prop('checked',false);
                    $(li).removeClass('selected');
                }
                else {
                    $(li).addClass('selected');
                    $(this).prop('checked',true);
                }
            });
            if(e.currentTarget.tagName != 'SPAN')quizSubmit.click();
        },
        setNextQuestion = function(isStart){
            var getSolution = function(){
                // alert('got to getSolution');
                var tmpTxt = '',
                    alreadyAdded,
                    qType,
                    productPackage = [],
                    rankedPackage = [],
                    productDisplayCounts = {
                        operators: { total:2, count:0 },
                        entrySystems: { total:1, count:0 },
                        keypads: { total:1, count:0 },
                        receivers: { total:1, count:0 },
                        remotes: { total:1, count:0 },
                        loops: { total:1, count:0 },
                        accessories: { total:30, count:0 },
                        fobs: {total: 1, count: 0}
                    },
                    tmpAnswer,
                    tmpEntranceType,
                    tmpCycles,
                    tmpSpeaker,
                    tmpControl,
                    tmpEntrances,
                    tmpHistory,
                    tmpBattery,
                    tmpSolar,
                    setSpecialCaseItems = function(){
                        var isItemIncluded = false,
                            tmpType = 'entrySystems',
                            hasHCTDCUL = false,
                            hasIPAC = false,
                            operatorsCount = 0,
                            removeArr = [],
                            removeRankedUsage = 0,
                            removeRanked = function(whereFrom){
                                var tmpIndex;
                                if(removeArr.length > 0){
                                    for(i in removeArr){
                                        tmpIndex = removeArr[i] - i;
                                        rankedPackage.splice(tmpIndex,1);
                                    }
                                }
                                removeArr = [];
                                removeRankedUsage++;
                            };
                        if(tmpSpeaker == 'Yes' && tmpHistory.indexOf('use IP') > -1){
                            for(r in rankedPackage){
                                if(rankedPackage[r].productType == tmpType && rankedPackage[r].id != 'IPAC'){
                                    removeArr.push(r);
                                }
                               else if(rankedPackage[r].id == 'IPAC'){
                                   isItemIncluded = true;
                                   rankedPackage[r].ranking = 0;
                               }
                            }

                            removeRanked('yes speaker yes ip');

                            if(!isItemIncluded){
                                rankedPackage.push({id: 'IPAC',productType: tmpType,ranking:0});
                            }
                        }
                        else if(tmpSpeaker == 'Yes' && tmpEntrances != '1'){
                            for(r in rankedPackage){
                                if(rankedPackage[r].productType == tmpType && rankedPackage[r].id == 'IPAC')isItemIncluded = true;
                            }
                            if(isItemIncluded){
                                rankedPackage.push({id: 'IPACIPDCC',productType: tmpType,ranking:0});
                                productDisplayCounts.entrySystems.total = 2;
                            }
                            else {
                                for(r in rankedPackage){
                                   if(rankedPackage[r].productType == tmpType){
                                       if(rankedPackage[r].id.substring(0,2) != 'EL'){
                                            removeArr.push(r);
                                        }
                                       else isItemIncluded = true;
                                    }                               
                                }

                                removeRanked('yes speaker yes multi entrance no ipac');

                                if(!isItemIncluded){
                                    rankedPackage.push({id: 'EL2000SS',productType: tmpType,ranking:0});
                                }
                            }
                        }
                        else if(tmpSpeaker == 'Yes'){
                           for(r in rankedPackage){
                               if(rankedPackage[r].productType == tmpType){
                                   if(rankedPackage[r].id.substring(0,2) != 'EL'){
                                        removeArr.push(r);
                                    }
                                   else isItemIncluded = true;
                                }                               
                            }
                            
                            removeRanked('yes speaker');
                            
                            if(!isItemIncluded){
                                rankedPackage.push({id: 'EL2000SS',productType: tmpType,ranking:0});
                            }
                        }
                        
                        isItemIncluded = false;
                        
                        if(tmpSpeaker == 'No' && tmpHistory.indexOf('POTS') > -1){
                           for(r in rankedPackage){
                               if(rankedPackage[r].productType == tmpType && rankedPackage[r].id != 'EL2000SS'){
                                    removeArr.push(r);
                                }
                               else if(rankedPackage[r].id == 'EL2000SS'){
                                   isItemIncluded = true;
                                   rankedPackage[r].ranking = 0;
                               }
                            }
                            
                            removeRanked('no speaker yes pots');
                            
                            if(!isItemIncluded){
                                rankedPackage.push({id: 'EL2000SS',productType: tmpType,ranking:0});
                            }
                        }
                        
                        isItemIncluded = false;
                        
                        if(tmpAnswer == 'Rural/Ranch' && tmpHistory.indexOf('POTS') > -1){
                           for(r in rankedPackage){
                               if(rankedPackage[r].productType == tmpType){
                                    removeArr.push(r);
                                }
                            }
                            
                            removeRanked('rural yes pots');
                            productDisplayCounts.entrySystems.total = 2;
                            rankedPackage.push({id: 'EL1SS',productType: tmpType,ranking:0});
                            rankedPackage.push({id: 'EL25',productType: tmpType,ranking:1});
                        }
                        
                        isItemIncluded = false;
                        
                        if(tmpAnswer == 'Industrial' && tmpHistory.indexOf('use IP') > -1){
                            for(r in rankedPackage){
                                if(rankedPackage[r].productType == tmpType && rankedPackage[r].id != 'IPAC'){
                                    removeArr.push(r);
                                }
                               else if(rankedPackage[r].id == 'IPAC'){
                                   isItemIncluded = true;
                                   rankedPackage[r].ranking = 0;
                               }
                            }
                            
                            removeRanked('yes industrial yes ip');
                            
                            if(!isItemIncluded){
                                rankedPackage.push({id: 'IPAC',productType: tmpType,ranking:0});
                            }
                        }
                        
                        if(tmpAnswer == 'Commercial' && (tmpBattery == 'Yes' || tmpSolar == 'Yes')){
                            for(r in rankedPackage){
                                if(rankedPackage[r].productType == 'operators'){
                                    console.log('got here first',rankedPackage[r].id);
                                    if(['SL3000', 'SL585', 'SL595', 'CSL200'].indexOf(rankedPackage[r].id) > -1){
                                        removeArr.push(r);
                                        isItemIncluded = true;
                                    }
                                }
                            }
                            removeRanked('yes commercial yes battery/solar');
                            if(isItemIncluded)rankedPackage.push({id: 'csl24ul',productType: 'operators',ranking:0});
                        }
                        
                        isItemIncluded = false;
                        
                        if(tmpControl.indexOf('Cards / Fobs / RFID Tags') > -1){
                            rankedPackage.push({id: 'LMPK3',productType: 'fobs',ranking:0});
                        }
                        
                        if(tmpControl.indexOf('Credentialed Remotes') > -1 && tmpEntrances != '1' && tmpEntrances != '2'){
                            for(r in rankedPackage){
                                if(rankedPackage[r].productType == 'remotes'){
                                    removeArr.push(r);
                                }
                            }
                            
                            removeRanked('yes credentialed yes three or more entrances');
                            
                            rankedPackage.push({id: 'PPK3M',productType: 'remotes',ranking:0});
                        }
                        else if(tmpControl.indexOf('Credentialed Remotes') > -1){
                            for(r in rankedPackage){
                                if(rankedPackage[r].productType == tmpType){
                                    if(rankedPackage[r].id == 'IPAC')hasIPAC = true;
                                }
                            }
                            if(!hasIPAC)rankedPackage.push({id: 'PPWR',productType: 'receivers',ranking:0});
                        }
                        
                        if(tmpHistory.indexOf('use IP') > -1){
                           for(r in rankedPackage){
                                if(rankedPackage[r].productType == 'operators'){
                                    operatorsCount++;
                                    if(rankedPackage[r].id == 'HCTDCUL')hasHCTDCUL = true;
                                }
                            }
                            if(hasHCTDCUL && operatorsCount == 1){
                                for(r in rankedPackage){
                                    if(rankedPackage[r].productType == tmpType){
                                        if(rankedPackage[r].id == 'IPAC')hasIPAC = true;
                                        else removeArr.push(r);
                                    }
                                    else if(rankedPackage[r].productType == 'keypads'){
                                        removeArr.push(r);
                                    }
                                }
                                
                                removeRanked('yes ip yes has HCTDCUL');
                                
                                if(!hasIPAC)rankedPackage.push({id: 'IPAC',productType: tmpType,ranking:0});
                            }
                        }
                    },
                    setRankedPackage = function(productType,id){
                        var prodRank,
                            prodRankCount,
                            topRank = 100,
                            loop,
                            accessories,
                            isOperatorSet = false;
                        for(r in rankings[productType]){                            
                            if(productType == 'operators'){
                                for(a in answersGiven){
                                    if(answersGiven[a].id == id){
                                        if(rankings[productType][r].type == answersGiven[a].answer){
                                            for(p in productPackage){
                                                if(productPackage[p].isValid){
                                                    prodRank = null;
                                                    prodRankCount = 0;
                                                    for(d in defaultSolutions){                                                
                                                        if(defaultSolutions[d].type == tmpAnswer){
                                                            for(dd in defaultSolutions[d]['operators']){
                                                                if(defaultSolutions[d]['operators'][dd].type == tmpEntranceType){
                                                                    if(tmpAnswer == 'Rural/Ranch' && (tmpEntranceType == 'Swing' || tmpEntranceType == 'Slide'))
                                                                    {
                                                                        for(i in defaultSolutions[d]['operators'][dd].id){
                                                                          if(defaultSolutions[d]['operators'][dd].id[i] == productPackage[p].id){
                                                                              prodRank = i;
                                                                              prodRankCount++;
                                                                          }
                                                                        }
                                                                    }
                                                                    else if(defaultSolutions[d]['operators'][dd].id == productPackage[p].id){
                                                                        prodRank = 0;
                                                                        prodRankCount++;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if(tmpAnswer == 'Rural/Ranch' && tmpEntranceType == 'Swing')prodRank = prodRank == null && rankings[productType][r].ruralitems.indexOf(productPackage[p].id) > -1 ? rankings[productType][r].ruralitems.indexOf(productPackage[p].id) + prodRankCount : prodRank;
                                                    else prodRank = prodRank == null && rankings[productType][r].items.indexOf(productPackage[p].id) > -1 ? rankings[productType][r].items.indexOf(productPackage[p].id) + prodRankCount : prodRank;
                                                    
                                                    if(prodRank != null){
                                                        tmpProd = productPackage[p];
                                                        tmpProd.productType = productType;
                                                        tmpProd.ranking = prodRank;
                                                        rankedPackage.push(tmpProd);
                                                    }
                                                }
                                            }
                                        }  
                                    }
                                }    
                            }
                            else {
                                for(p in productPackage){
                                    prodRank = rankings[productType][r].items.indexOf(productPackage[p].id);
                                   
                                    if(prodRank > -1 && productPackage[p].isValid){
                                        tmpProd = productPackage[p];
                                        tmpProd.productType = productType;
                                        tmpProd.ranking = prodRank;
                                        rankedPackage.push(tmpProd);
                                    }
                                }
                            }
                        }
            
                        if(productType == 'operators'){
                            for(r in rankedPackage){
                                if(!isOperatorSet && rankedPackage[r].productType == 'operators'){
                                    loop = {productType:'loops',id:rankedPackage[r].loop};
                                    accessories = {productType:'accessories',id:rankedPackage[r].accessories};
                                    isOperatorSet = true;
                                }
                            }
                            if(isOperatorSet){
                                rankedPackage.push(loop);
                                rankedPackage.push(accessories);   
                            }
                        }
                    },
                    printRankedProductList = function(){
                        var packageSectionValidation = {
                                operators: false,
                                entrySystems: false,
                                keypads: false,
                                receivers: false,
                                remotes: false
                            },
                            setProductClass = function(product){
                                var firstCharIsStr = isNaN(product.substr(0,1));
                                product = product.toLowerCase().replace(/ /g,'-');
                                if(!firstCharIsStr)product = 'n' + product;
                                return product;  
                            },
                            setDefaultPackage = function(type){
                                if(type == 'fobs'){
                                    if(tmpControl.indexOf('Cards / Fobs / RFID Tags') > -1)rankedPackage.push({id: 'LMPK3',productType: 'fobs',ranking:0});
                                    return;
                                }
                                for(d in defaultSolutions){                                                
                                    if(defaultSolutions[d].type == tmpAnswer){
                                        if(type == 'operators'){
                                            for(dd in defaultSolutions[d][type]){
                                                if(defaultSolutions[d][type][dd].type == tmpEntranceType){
                                                    if(tmpAnswer == 'Rural/Ranch' && (tmpEntranceType == 'Swing' || tmpEntranceType == 'Slide'))
                                                    {
                                                        rankedPackage.push({id: defaultSolutions[d][type][dd].id[0],productType: type});
                                                    }
                                                    else if(tmpAnswer == 'Industrial' && tmpEntranceType == 'Slide' && tmpCycles.indexOf('Continuous') > -1 ){
                                                        rankedPackage.push({id: defaultSolutions[d][type][dd].continous,productType: type});
                                                    }
                                                    else {rankedPackage.push({id: defaultSolutions[d][type][dd].id,productType: type});}
                                                    for(p in products){
                                                        if(products[p].id == defaultSolutions[d][type][dd].id){
                                                            var loop = {productType:'loops',id:products[p].loop};
                                                            var accessories = {productType:'accessories',id:products[p].accessories};
                                                            rankedPackage.push(loop);
                                                            rankedPackage.push(accessories);
                                                        }
                                                    }    
                                                }
                                            }
                                        }
                                        else if(defaultSolutions[d][type] != null) {
                                            rankedPackage.push({id: defaultSolutions[d][type],productType: type});
                                        }
                                    }
                                }
                            },
                            getCategorySpan = function(type,aId){
                                var spanTxt = '';
                                switch(type){
                                    case 'operators':
                                        spanTxt = 'Gate Operator';
                                        break;
                                    case 'entrySystems':
                                        spanTxt = 'Entry System';
                                        break;
                                    case 'receivers':
                                        spanTxt = 'Receivers';
                                        break;
                                    case 'keypads':
                                        var receivers = [
                                            'PPWR',
                                            'STAR1000',
//                                            '850LM',
//                                            '860LM'
                                        ];
                                        spanTxt = receivers.indexOf(aId) > -1 ? 'Receiver' : 'Keypad';
                                        break;
                                    case 'remotes':
                                        spanTxt = 'Remote Control';
                                        break;
                                    case 'accessories':
                                        var nonSaftey = [
                                            'SP10W12V',
                                            'SP20W12V',
                                            'MALED12',
                                            'MBAT',
                                            'K651208',
                                            'LMSC1000'
                                        ];
                                        spanTxt = nonSaftey.indexOf(aId) > -1 ? 'Accessory' : 'Safety Accessory';
                                        break;
                                    case 'loop':
                                        spanTxt = 'Loop Detector';
                                        break;
                                    case 'fobs':
                                        spanTxt = 'Cards / Fobs / RFID Tags';
                                        break;
                                }
                                return '<span class="category">' + spanTxt + '</span>';
                            },
                            updateTmpTxt = function(type){
                                var tmpStr,
                                    setTmpStr = function(){
                                        for(r in rankedPackage){
                                            if(rankedPackage[r].productType == type && (productDisplayCounts[type].count < productDisplayCounts[type].total || (productDisplayCounts[type].count == productDisplayCounts[type].total && rankedPackage[r].id == 'EL1SS'))){
                                                tmpTxt += '<li style="cursor: pointer;" class="' + setProductClass(rankedPackage[r].id) + '">' + getCategorySpan(type,rankedPackage[r].id) + '<span>' + rankedPackage[r].id + ' - ' + type + '</span></li>';
                                                productDisplayCounts[type].count++;
                                            }
                                        }   
                                    };
                                setTmpStr();
                            };
                        $('#last').attr('class','wrapper ' + tmpAnswer.replace('/','-').replace(/ /g,'-').toLowerCase());
                        $('#last .right a h2').html(tmpAnswer);
                      switch (tmpAnswer){
                          case 'Commercial':
                          $('#last .right a').attr("href","/for-businesses/commercial-door-operators");
                          break;
                           
                           case 'Rural/Ranch':
                           $('#last .right a').attr("href","/for-homes/gate-operators/rural-solutions");
                           break;

                           case 'Gated Community':
                           $('#last .right a').attr("href","/for-businesses/gate-operators/gated-community-apartments-solution");
                           break;

                           case 'Industrial':
                           $('#last .right a').attr("href","https://stgwww.liftmaster.com/for-businesses/gate-operators/commercial-industrial-solution");
                           break;
                           
                           case 'Apartment/Condo with Parking':
                           $('#last .right a').attr("href","/for-businesses/commercial-door-operators");
                           break;     

                           case 'Off-Street Parking':
                           $('#last .right a').attr("href","/for-businesses/commercial-door-operators");
                           break; 
                       
                           case 'Light Commercial':
                           $('#last .right a').attr("href","/for-businesses/commercial-door-operators");
                           break; 
                        
                           case 'Single Family Residence':
                           $('#last .right a').attr("href","/for-businesses/commercial-door-operators");
                           break;                                                                                                        
                      }
                        
                        tmpTxt += '<ul>';
                        updateTmpTxt('operators');
                        if(productDisplayCounts['operators'].count == 0){
//                            console.log('no operator found, setting defaults');
                            rankedPackage = [];
                            setDefaultPackage('operators');
                            setDefaultPackage('entrySystems');
                            setDefaultPackage('keypads');
                            setDefaultPackage('receivers');
                            setDefaultPackage('remotes');
                            setDefaultPackage('fobs');
                            setSpecialCaseItems();
                            updateTmpTxt('operators');
                        }
                        updateTmpTxt('entrySystems');
                        updateTmpTxt('keypads');
                        updateTmpTxt('receivers');
                        updateTmpTxt('remotes');
                        updateTmpTxt('fobs');

                        for(r in rankedPackage){
                            if(rankedPackage[r].productType == 'accessories' && productDisplayCounts['accessories'].count < productDisplayCounts['accessories'].total){
                                for(a in rankedPackage[r].id){
                                    tmpTxt += '<li style="width: 275px;cursor: pointer;" class="' + setProductClass(rankedPackage[r].id[a]) + '">' + getCategorySpan('accessories',rankedPackage[r].id[a]) + '<span>' + rankedPackage[r].id[a] + ' -accessories</span></li>';
                                    productDisplayCounts['accessories'].count++;
                                }
                            }   
                        }
                      
                        for(r in rankedPackage){
                            if(rankedPackage[r].productType == 'entrySystems' && ['IPAC','IPACIPDCC','EL2000SS','EL25'].indexOf(rankedPackage[r].id) > -1){
                              tmpTxt += '<li style="width: 275px; cursor:pointer;" class="' + setProductClass('LMSC1000') + '">' + getCategorySpan('accessories','LMSC1000') + '<span>' + 'LMSC1000' + ' -accessories</span></li>';
                            }
                        }
                      
                        for(r in rankedPackage){
                            if(rankedPackage[r].productType == 'loops' && productDisplayCounts['loops'].count < productDisplayCounts['loops'].total){
                                tmpTxt += '<li style="width: 275px;cursor: pointer;" class="' + setProductClass(rankedPackage[r].id) + '">' + getCategorySpan('loop') + '<span>' + rankedPackage[r].id + ' -loops</span></li>';
                                productDisplayCounts['loops'].count++;
                            }   
                        }
                        
                        tmpTxt += '</ul>'
                    },
                    setProduct = function(){
                        tmpProd = products[index];
                        
                       if(tmpProd[qType][it].value){
                           if(!alreadyAdded){
                               tmpProd.isValid = true;
                               productPackage.push(tmpProd); 
                           }
                       }
                       else if(tmpProd[qType][it].value == null){
//                                   do nothing
                       }
                       else if(!tmpProd[qType][it].value){
                           if(alreadyAdded){
                                for(product in productPackage){
                                    if(tmpProd.id == productPackage[product].id){
                                        productPackage[product].isValid = false;
                                    }
                                }    
                           }
                           else {
                               tmpProd.isValid = false;
                               productPackage.push(tmpProd);
                           }
                       }
                       if(tmpProd.id == 'EL2000SS'){
                           var tmpEntry = null;
                           for(iii in productPackage){
                               if(productPackage[iii].id =='EL2000SS')tmpEntry = productPackage[iii];
                           }
                       }
                    };
                // alert('set Vars');
                  for(a in answersGiven){
                      switch(answersGiven[a].id){
                          case 'appType':
                              tmpAnswer = answersGiven[a].answer;
                              break;
                          case 'entranceType':
                              tmpEntranceType = answersGiven[a].answer;
                              break;
                          case 'cyclesPerDay':
                              tmpCycles = answersGiven[a].answer;
                              break;
                          case 'speakerSystem':
                              tmpSpeaker = answersGiven[a].answer;
                              break;
                          case 'controlAccess':
                              tmpControl = answersGiven[a].answer;
                              break;
                          case 'entranceNum':
                              tmpEntrances = answersGiven[a].answer;
                              break;
                          case 'actionHistory':
                              tmpHistory = answersGiven[a].answer;
                              break;
                            case 'batteryBackup':
                              tmpBattery = answersGiven[a].answer;
                              break;
                            case 'solarPower':
                              tmpSolar = answersGiven[a].answer;
                              break;
                        }
                    qType = answersGiven[a].id;
                    for(index in products){
                        alreadyAdded = false;
                        for(product in productPackage){
                            if(products[index].id == productPackage[product].id)alreadyAdded = true;
                        }
                        for(it in products[index][qType]){
                            if(answersGiven[a].id == 'controlAccess'){
                                for(aa in answersGiven[a].answer){
                                    if(products[index][qType][it].name == answersGiven[a].answer[aa]){
                                        setProduct();                 
                                    }
                                }
                            }
                            else {
                                if(products[index][qType][it].name == answersGiven[a].answer){
                                   setProduct();
                               }   
                            }
                        }
                    }
                }
                // alert('for d through it');
                setRankedPackage('operators','entranceType');
                setRankedPackage('entrySystems',null);
                setRankedPackage('keypads',null);
                setRankedPackage('remotes',null);
                // alert('set Ranked');
                setSpecialCaseItems();
                // alert('set special');
                rankedPackage.sort(function(a,b){
                   a = a.ranking;
                    b = b.ranking;
                    return a < b ? -1 : (a > b ? 1 : 0);
                });
                // alert('sorted rank');
                printRankedProductList();
                // alert('printed rank');
//                console.log(productPackage,rankedPackage);
                // alert('wrote to log');
                return tmpTxt;
            };
            isFading = false;
            quizIndex ++;
            var askQ = shouldQuestionBeAsked();
            if(!askQ){
                quizIndex++;
                questionsAsked++;
            }
            if(questionsGiven < questionsAsked){
                $('#quiz-result').html(getSolution());
                $('#quiz-result ul li').click(function(){
                  var id = $(this).attr('class').replace('-',' ');
                  if(id.substr(0,1) == 'n')id = id.substr(1);
                  for(item in itemURLS){
                    if(itemURLS[item].id.toLowerCase() == id){
                     window.open(itemURLS[item].url,'_blank');
                    }
                  }
                });
                // alert('finished getSol');
                quizBody.fadeOut(fadeInterval);
                $('#first').fadeOut(fadeInterval);
                setTimeout(function(){
                    $('#last').fadeIn(fadeInterval);
                    quizResult.fadeIn(fadeInterval);
                    $('#quiz-restart').fadeIn(fadeInterval);
                },fadeInterval);
                return;
            }
            if(quizIndex + 1 > questionsGiven){
                quizIndex--;
                return;
            }
            var answersCount = questions[quizIndex].answers.length,
                qLetter = '',
                answers,
                tmpItemClass = '';
            answerGrades.children().removeClass('active');
            $('body').attr('class',questions[quizIndex].id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
            questionBox.html(questions[quizIndex].text);
            questionBox.data('qType',questions[quizIndex].id);
            answersBox.html('');
            for(var i = 0; i < answersCount; i++){
                if(quizIndex == 1 && answersGiven[0].answer == 'Single Family Residence' && (questions[quizIndex].answers[i].name == 'Barrier' || questions[quizIndex].answers[i].name == 'Overhead')){
                    tmpItemClass = '';
                } 
                else tmpItemClass = 'active';
                answersBox.append('<li class="' + tmpItemClass + '"><input class="answer" type="radio" value="' + questions[quizIndex].answers[i].name + '" /> ' + '<span>' + questions[quizIndex].answers[i].name.replace(' (','<br>(') + '</span></li>');   
            }
            if(quizIndex == 7){
                quizSubmit.show();
                answers = answersBox.children('li').children('span');
                answers.click(function(e){
                    answerClick(e);
                });
            }
            else {
                quizSubmit.hide();
                answers = answersBox.children('li.active');
                answers.click(function(e){
                    answerClick(e);
                });
            }
            if(!isStart){
                setTimeout(function(){quizQIndex.html(questionsAsked);quizQwrapper.fadeIn(fadeInterval);isFading = false;},fadeInterval);
            }
            else quizQIndex.html(questionsAsked);
        },
        setLastQuestion = function(){
            isFading = false;
            quizIndex--;
            var askQ = shouldQuestionBeAsked();
            if(!askQ){
                quizIndex--;
                questionsAsked--;
            }
            var answersCount = questions[quizIndex].answers.length,tmpItemClass;
            answerGrades.children().removeClass('active');
            $('body').attr('class',questions[quizIndex].id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
            questionBox.html(questions[quizIndex].text);
            questionBox.data('qType',questions[quizIndex].id);
            answersBox.html('');
            for(var i = 0; i < answersCount; i++){
                if(quizIndex == 1 && answersGiven[0].answer == 'Single Family Residence' && (questions[quizIndex].answers[i].name == 'Barrier' || questions[quizIndex].answers[i].name == 'Overhead')){
                    tmpItemClass = '';
                } 
                else tmpItemClass = 'active';
                answersBox.append('<li class="' + tmpItemClass + '"><input class="answer" type="radio" value="' + questions[quizIndex].answers[i].name + '" /> ' + '<span>' + questions[quizIndex].answers[i].name.replace(' (','<br>(') + '</span></li>');   
            }
            if(quizIndex == 7){
                quizSubmit.show();
                answers = answersBox.children('li').children('span');
                answers.click(function(e){
                    answerClick(e);
                });
            }
            else {
                quizSubmit.hide();
                answers = answersBox.children('li.active');
                answers.click(function(e){
                    answerClick(e);
                });
            }
        },
        shouldQuestionBeAsked = function(){
            var answer = false;
            if(typeof questions[quizIndex] == 'undefined')answer = true;
            else if(questions[quizIndex].ask == null)answer = true;
            else if(questions[quizIndex].ask.indexOf(answersGiven[0].answer) > -1)answer = true;
            return answer;
        },
        setAnswer = function(isFalse){
            answersDisplay.html('');
            var answers = answersBox.children('li').children('input'),
                answersCount = answers.length,
                itemClass,isCorrect,
                qType = questionBox.data('qType'),
                tmpProd,alreadyAdded;
            for(var i = 0; i < answersCount; i++){
                isChecked = answers.eq(i).is(':checked');
                if(isChecked){
                    for(a in answersGiven){
                       if(qType == answersGiven[a].id){
                           if(quizIndex == 7){
                                if(answersGiven[a].answer == null)answersGiven[a].answer = [];
                                answersGiven[a].answer.push(answers.eq(i).val());    
                           }
                           else answersGiven[a].answer = answers.eq(i).val();
                       }
                    }
                }
            }
            questionsAsked ++;
            quizQwrapper.fadeOut(fadeInterval);
            setTimeout(function(){setNextQuestion(false);},fadeInterval);
        },
    setQuiz = function(){
        var setAnswerGiven = function(){
            answersGiven = [];
            for(q in questions){
               answersGiven.push({id:questions[q].id,text:questions[q].text,answer:null}); 
            }
        };
        $('#first').show();
        $('#last').hide();
        setAnswerGiven();
        quizIndex = -1;
        questionsAsked = 1;
        correctAnswerCount = 0;
        quizRwrapper.css('display','none');
        quizQwrapper.css('display','block');
    };

    setQuizInitial = function(){
        if(isFading)return;
        
        quizResult.fadeOut(fadeInterval);
        quizBody.fadeOut(fadeInterval);
        $('#quiz-restart').fadeOut(fadeInterval);
        $('.pas-quizwrapper .nav').fadeOut(fadeInterval);
        setTimeout(function(){
            setQuiz();
            $('body').attr('class','front');
            quizIntro.fadeIn(fadeInterval);
            $('#quiz-restart').removeClass('selected');
        },fadeInterval); 
        $(window).scrollTop(0,0);
    };
    quizStart.click(function(e){
        e.preventDefault();
        if(isFading)return;
        isFading = true;
        $(e.target).addClass('selected');
        quizIntro.fadeOut(fadeInterval);
        setTimeout(function(){
            setNextQuestion(true);
            quizBody.fadeIn(fadeInterval);
            $('.pas-quizwrapper .nav').fadeIn(fadeInterval);
            $(e.target).removeClass('selected');
        },fadeInterval);
    });
    quizContinue.click(function(e){
        e.preventDefault();
        setNextQuestion(false); 
    });
    quizSubmit.click(function(e){
        e.preventDefault();
        var answer = $('input.answer:checked').val();
        if(typeof answer == 'undefined')return;
        isFading = true;
        answer = answer.indexOf('false') > -1;
        $(e.currentTarget).addClass('selected');
        setAnswer(answer);
        setTimeout(function(){$(e.currentTarget).removeClass('selected')},fadeInterval);
    });
    quizBack.click(function(e){
        e.preventDefault();
        if(isFading)return;
        quizBody.fadeOut(fadeInterval);
        if(quizIndex == 0){
                quizStartOver.click();
                return;
        }
        questionsAsked--;
        setTimeout(function(){
            setLastQuestion(); 
            quizQIndex.html(questionsAsked);
            quizBody.fadeIn(fadeInterval);
        },fadeInterval);
    });
    quizReset.click(function(e){
        e.preventDefault();
        quizBody.fadeOut(fadeInterval);
        setTimeout(function(){quizContinue.addClass('active');setQuiz(); quizIntro.fadeIn(fadeInterval)},fadeInterval); 
    });
    $('#quiz-restart').click(function(e){
       quizStartOver.click(); 
        $(e.currentTarget).addClass('selected');
    });
    quizStartOver.click(function(e){
        if(isFading)return;
        e.preventDefault();
        quizResult.fadeOut(fadeInterval);
        quizBody.fadeOut(fadeInterval);
        $('#quiz-restart').fadeOut(fadeInterval);
        $('.pas-quizwrapper .nav').fadeOut(fadeInterval);
        setTimeout(function(){
            setQuiz();
            $('body').attr('class','front');
            quizIntro.fadeIn(fadeInterval);
            $('#quiz-restart').removeClass('selected');
        },fadeInterval);
        $(window).scrollTop(0,0); 
    });
    quizCount.html(questionsGiven);
    setQuizInitial();
    var is_iPad = navigator.userAgent.match(/iPad/i) != null;
    if(is_iPad){
        $('body').css('font-family',"'Helvetica Neue','my helvetica");
        $('.pas-quizwrapper .nav div#first a').css('font-weight',300);
        $('.pas-quizwrapper .nav div#first h2').css('font-weight',400);
        $('h1').css('font-weight',400);
        $('.pas-quizwrapper .nav div#last .right h2').css('font-weight',400);
        $('.pas-quizwrapper .nav div#first p').css('font-weight',300);
        $('<style>li span {font-weight: 500;} .pas-quizwrapper .nav div#last .right p span { font-weight: 500; }</style>').appendTo('head');
    }

    
});