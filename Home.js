import React from 'react';

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div id="main-banner">
                    <img id="main-banner-img"
                         src="https://static.pexels.com/photos/34983/pexels-photo.jpg" width="100%" height="337" alt="Main Banner" />
                </div>
                  <table className="main-page-stub-table">
                    <tr className="main-page-box-stubs">
                        <th className="box-stub">
                            <h3 className="box-stub-h3">Products and Services</h3>
                        </th>

                        <th className="box-stub">
                            <h3 className="box-stub-h3">Nationwide, we reach out</h3>
                        </th>
                        <th className="box-stub">
                            <h3 className="box-stub-h3">Contact us</h3>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li className="stub-body">With more than 50,000 different
                                    treatments and state of the art medical practices, we are sure to
                                    give you the best health treatment possible.</li>
                                <br />
                                <br />
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li className="stub-body">We reach out nationwide, to help those
                                    in need. With more than 60 hospitals in every state in the
                                    country, we are here for you.</li>
                                <br />
                                <br />
                                <li className="stub-body">Not sure if there is a hospital local
                                    to you?</li>

                                <br />
                                <br />
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li className="stub-body">Phone Number: 123-123-1234</li>
                                <li className="stub-body">Email: DoctorForYou@doctorforyou.com</li>
                                <li className="stub-body">Fax: 999-999-9999</li>
                                <li className="stub-body">12345 Ox Bunny Rd, Centreville, VA
                                    20121</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="main-page-box-stubs">
                        <th className="box-stub">
                            <h3 className="box-stub-h3">Careers</h3>
                        </th>
                        <th className="box-stub">
                            <h3 className="box-stub-h3">Donations</h3>
                        </th>
                        <th className="box-stub">
                            <h3 className="box-stub-h3">You Can Help</h3>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li className="stub-body">Looking to work at the most prestigious
                                    hospital, helping people in extraordinary ways?</li>
                                <li className="stub-body">See what positions we need you in.</li>
                                <br />
                                <br />
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li className="stub-body">You can make a difference in the world
                                    today.</li>
                                <li className="stub-body">See those in need and reach out to
                                    them.</li>
                                <li className="stub-body">With more than 4 breakthroughs in
                                    cancer research foundations in the company, you can be a part of
                                    a bigger cause.</li>
                                <br />
                                <br />
                            </ul>
                        </td>
                        <td><iframe frameBorder="0" height="340"
                                    src="http://www.youtube.com/embed/cDDWvj_q-o8"
                                    title="Hospital For You Donations" width="380"></iframe></td>
                    </tr>
                </table>
            </div>
        );
    }
});


ReactDOM.render(<TodoApp />, document.getElementById('home2'));
