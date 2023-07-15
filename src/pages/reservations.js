import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'bootstrap';
import './reservationstyle.scss';

const Reservations=()=>{

    const onSubmit=(e)=>{
        e.preventDefault();
    }

    return(
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center ' id='cont'>
        <h1>Online Reservation Form</h1>
    <form  className='d-flex flex-column align-items center' onSubmit={onSubmit}>
<div class="form-floating input-group mb-3">
  <input type="text" class="form-control" id="Name" placeholder="Enter Name" required/>
  <label for="Name">Name</label>
</div>
<div class="form-floating input-group  mb-3">
  <input type="number" class="form-control" id="People" placeholder="Enter Number of People" min="1" max="10" required/>
  <label for="people">People</label>
</div>

<div className='input-group  mb-3'>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DateTimePicker
  label="Date & Time"
  className='datepicker'

/>
    </LocalizationProvider></div>

    <div className='input-group  mb-3'>
    <select class="form-select" aria-label="Default select example" required>
  <option selected>Birthday</option>
  <option value="1">Aniverasry</option>
  <option value="2">Engagement</option>
  
</select>
</div>

<button type="submit" class="btn btn-warning btn-lg">Submit</button>
    </form>
    </div>
    );
}
export default Reservations;