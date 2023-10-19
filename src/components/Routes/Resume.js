import { useEffect, useState } from 'react';
import { Pie, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import "../../input.css";

let spinner = `${process.env.PUBLIC_URL}/images/svgs/spinner.svg`;



export default function Resume(props) {

    const [treeHouseProfile, setTreeHouseProfile] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);
    const [badgeData, setBadgeData] = useState([{}]);


    useEffect(() => {
        if (!treeHouseProfile?.points) {
            getProfile();
        }
    }, [])


    function getProfile() {
        // setDataLoading(true)
        fetch('https://teamtreehouse.com/profiles/spencerrenfro.json')
            .then(response => response.json())
            .then((data) => {
                setTreeHouseProfile(data);
                setDataLoading(false);
                setBadgeData(data.badges);
            })
    }

    let chartSchema;

    if (treeHouseProfile) {
        const pointsPropertyNames = Object.keys(treeHouseProfile.points);
        const filteredPointsPropertyNames = pointsPropertyNames.filter(key => !key.includes("total"));
        const chartDataValues = filteredPointsPropertyNames.map((name) => treeHouseProfile.points[name]);
        const pointsNumberProperty = Object.keys(treeHouseProfile.points);
        const filteredNumberTotalProperty = pointsNumberProperty.filter(val => !val.includes("total"));
        const chartNumberData = filteredNumberTotalProperty.map((total) => total);


        // removes  treehouse points that are less than 1
        const pointsNumberLengthProperty = Object.values(treeHouseProfile.points);
        const filteredPointsNumberLengthProperty = pointsNumberLengthProperty.filter((val) => { return val > 1 });


        chartSchema = {
            labels: chartNumberData.map((values) => values),
            datasets: [{
                label: "Points",
                data: chartDataValues.map((data) => data),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    'black',
                    'red',
                    'purple',
                    'pink',
                    'green',
                    'brown',
                    '#4682b4',
                    '#ff6347'
                ],
                borderColor: "black",
                borderWidth: 2,
            },
            ],
        };

        const graphDataVar = <Bar data={chartSchema} />;
        const pieDataVar = <Pie data={chartSchema} />;

    }

    return (
        <div className="card shadow-xl pt-10">


            <div className="main-content home flex flex-wrap justify-center">
                <div>
                    <h1 className="normal-case text-2xl grow h-7 pb-20">Education</h1>
                </div>

            </div>
            <div className=" m-2 rounded-lg pt-10 pb-10">
                <div className="ml-5">
                    <div className="flex justify-between">
                        <h1 className="normal-case text-2xl pb-20 sm:pb-20 md:pb-20 lg:pb-10 h-7" >TeamTreeHouse Profile Data:</h1>
                        <img className="roundedImg" alt="treeHouse logo" src={"https://secure.gravatar.com/avatar/290de00adbb10a59657d8efec59e6b36?s=400&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-445fbbabfc8dc9188fb5967fe43322ee0c3e0dd1e10f378bf8343784af5a13eb.webp&r=pg"} />
                    </div>
                    <h3>Courses Plus Student</h3>
                    <h3>Member Since January 2, 2020</h3>
                    <p className="pt-5">
                        All of the data on this page is live data, and is taken from <a className='text-cyan-700 underline' rel="noreferrer" href="https://teamtreehouse.com/spencerrenfro" target="_blank">teamTreeHouse</a>, this is an open source API provided by teamtreehouse, and
                        I have encorporated this data with charts.js to provide a real time chart.
                    </p>
                </div>
                {/* <div><img src={treeHouseProfile.gravatar_url}/></div> */}

            </div>

            {
                dataLoading ?

                    <div className="flex justify-center">
                        <img className="animate-spin spinner" viewBox="0 0 24 24" src={spinner} alt="" />
                    </div>

                    :

                    <div>
                        <div className=" rounded-lg p-5 m-10">
                            <div className="mt-5 mb-10 border-bottom">
                                <h1 className="normal-case text-2xl grow h-7 ml-5 pb-20 md:mb-2">Total Points:{treeHouseProfile?.points?.total || 0}</h1>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                                <div className="btn-primary rounded-lg p-2 "><li className="place-self-center">HTML: {treeHouseProfile?.points?.HTML || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">CSS: {treeHouseProfile?.points?.CSS || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">JavaScript: {treeHouseProfile?.points?.JavaScript || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm truncate ...">Achievements: {treeHouseProfile?.badges?.length || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">C# : {treeHouseProfile?.points?.["C#"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Digital Literacy: {treeHouseProfile?.points?.["Digital Literacy"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Computer Science: {treeHouseProfile?.points?.["Computer Science"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Machine Learning: {treeHouseProfile?.points?.["Machine Learning"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Security: {treeHouseProfile?.points?.Security || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Java: {treeHouseProfile?.points?.Java || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Data Bases: {treeHouseProfile?.points?.Databases || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">PHP: {treeHouseProfile?.points?.PHP || 0} </li></div>
                            </ul>
                        </div>



                        <div className={props.windowSize > 900 ? "" : "hide"}>
                            {
                                chartSchema &&
                                // props.windowSize > 700 ?
                                <div className="container">
                                    <Bar data={chartSchema} />
                                    {/* <Pie data={chartSchema} /> */}

                                </div>
                                // : <h1>Screen too small to display graph</h1>
                            }
                        </div>


                        <div className=" rounded-lg   shadow-2xl py-10">
                            <div className="mt-5  ml-10 mr-10">
                                <h1 className=" text-2xl font-bold text-center pb-20 md:mb-2 ">Achievements: Total {badgeData.length}</h1>

                            </div>

                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-center border-bottom">
                                    <i className="fa-solid fa-bars fa-2xl"></i>
                                </div>

                                <div className="collapse-content">
                                    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4  ">
                                        {badgeData.map((data) => (
                                            <li className="image-box" key={data.id}>
                                                <div className="image-title">
                                                    <h1 className=" ">{data.name}</h1>
                                                </div>
                                                <img className="icon-images" src={data.icon_url} alt="svg" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </div>
    );
}