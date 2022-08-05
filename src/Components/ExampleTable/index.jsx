import './style.css';

function ExampleTable() {
  return (
    <div className="table-container">
      <h1 className="heading">Responsive Table</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Start date</th>
            <th>Start / End Time</th>
            <th>Batch type</th>
            <th>Training mode</th>
            <th>Batch status</th>
            <th>#</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td data-label="Start date">04 ago 2022</td>
            <td data-label="Start / End Time">22:00 - 00:00 (IST)</td>
            <td data-label="Batch type">Weekend</td>
            <td data-label="Training mode">Online Training</td>
            <td data-label="Batch status"><span className="text_open">[ open ]</span></td>
            <td data-label="#"><a href="#" className="btn">Enroll Now</a></td>
          </tr>

          <tr>
            <td data-label="Start date">04 ago 2022</td>
            <td data-label="Start / End Time">22:00 - 00:00 (IST)</td>
            <td data-label="Batch type">Weekend</td>
            <td data-label="Training mode">Online Training</td>
            <td data-label="Batch status"><span className="text_open">[ open ]</span></td>
            <td data-label="#"><a href="#" className="btn">Enroll Now</a></td>
          </tr>

          <tr>
            <td data-label="Start date">04 ago 2022</td>
            <td data-label="Start / End Time">22:00 - 00:00 (IST)</td>
            <td data-label="Batch type">Weekend</td>
            <td data-label="Training mode">Online Training</td>
            <td data-label="Batch status"><span className="text_open">[ open ]</span></td>
            <td data-label="#"><a href="#" className="btn">Enroll Now</a></td>
          </tr>

          <tr>
            <td data-label="Start date">04 ago 2022</td>
            <td data-label="Start / End Time">22:00 - 00:00 (IST)</td>
            <td data-label="Batch type">Weekend</td>
            <td data-label="Training mode">Online Training</td>
            <td data-label="Batch status"><span className="text_open">[ open ]</span></td>
            <td data-label="#"><a href="#" className="btn">Enroll Now</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ExampleTable
