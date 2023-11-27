import React from "react";

const RankingsPage = () => {
  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>rank</th>
            <th>team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>SL Mahfrooz Mahalleh</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Athletico kizilic</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Joshan United</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Shariat FC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RankingsPage;
