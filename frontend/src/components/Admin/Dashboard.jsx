import { Flex, Box, Grid, GridItem, Stat, StatLabel, StatNumber, Text, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaBoxOpen, FaMoneyBillWave, FaProductHunt } from "react-icons/fa";
import { MdPeople, MdStar } from "react-icons/md";
import ApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Dashboard() {
  const { token } = useSelector((store) => store.auth);
  const [productCount, setProductCount]= useState(0)
  const [userCount, setUserCount]= useState(0)
  const [orderCount, setOrderCount]= useState(0)
  const [sales, setSales]=useState(0);
  const [outofStock, setOutofStock]=useState(0);
  const getAllProducts= async()=> {
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}admin/products`,{
        headers:{
          authorization:token
        }
      });
      let result = await res.json();
      let data = result.products;
      let count = 0;
      for(let i=0; i<data.length; i++){
        if(data[i].quantity === 0){
          count++;
        }
      }
      setOutofStock(count);
      setProductCount(result.productsCount);
    } catch (error) {
      console.log(error.message);
    }
  }
  const getAllUsers= async()=> {
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}admin/users`,{
        headers:{
          authorization:token
        }
      });
      let result = await res.json();
      setUserCount(result.usersCount);
    } catch (error) {
      console.log(error.message);
    }
  }
  const getAllOrders= async()=> {
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}admin/orders`,{
        headers:{
          authorization:token
        }
      });
      let result = await res.json();
      let data = result.orders;
      let prices = 0;
      for(let i=0; i<data.length; i++){
        prices += data[i].orderCount * data[i].prodId.price;
      }
      setSales(prices)
      setOrderCount(result.ordersCount);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getAllProducts()
    getAllUsers()
    getAllOrders()
  }, []);
  
    const colorModeIcon = useColorModeValue();
    const userChartData = {
        options: {
          chart: {
            id: "user-chart",
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        },
        series: [
          {
            name: "Users",
            data: [0, 1, 2, 4, 2, 3, userCount],
          },
        ],
      };
    
      const orderChartData = {
        options: {
          chart: {
            id: "order-chart",
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          },
        },
        series: [
          {
            name: "Orders",
            data: [3, 3, 2, 1, orderCount, 0],
          },
        ],
      };
    
      const doughnutData = {
        options: {
          chart: {
            id: "category-chart",
            toolbar: {
              show: false,
            },
          },
          colors: ["#1a936f", "#e63946", "#ffb703", "#457b9d", "#a8dadc"],
          legend: {
            position: "bottom",
            labels: {
              colors: "#777777",
              useSeriesColors: false,
            },
          },
          dataLabels: {
            enabled: true,
          },
        },
        series: [15, 10, 20, 5, 10],
        chartOptions: {
          labels: ["Jordan-High", "Jordan-Low", "Jordan-4", "Yeezys", "Apparels"],
        }
      };
  return (
    <Box px={[4, 8, 10]} py={[4, 6]}>
      <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb={6}>Dashboard</Text>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={[4, 6, 8]}>
        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
              <StatLabel><FaProductHunt></FaProductHunt>Total Products</StatLabel>
              <StatNumber>{productCount || 0}</StatNumber>
            </Stat>
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
            <StatLabel>
                <FaShoppingCart />
              </StatLabel>
              <StatLabel>Total Orders</StatLabel>
              <StatNumber>{orderCount || 0}</StatNumber>
            </Stat>
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
            <StatLabel>
                <MdPeople />
              </StatLabel>
              <StatLabel>Total Users</StatLabel>
              <StatNumber>{userCount || 0}</StatNumber>
            </Stat>
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
            <StatLabel>
                <FaMoneyBillWave />
              </StatLabel>
              <StatLabel>
                Total Sales
              </StatLabel>
              <StatNumber>{`₹${parseFloat(sales).toLocaleString()}.00`}</StatNumber>
            </Stat>
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
              <StatLabel>
                <FaUser /> Active Users
              </StatLabel>
              <StatNumber>0</StatNumber>
            </Stat>
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
              <StatLabel>
                <FaBoxOpen /> Out of Stock
              </StatLabel>
              <StatNumber>{outofStock}</StatNumber>
            </Stat>
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <ApexChart
              type="line"
              series={userChartData.series}
              options={userChartData.options}
              height={250}
            />
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <ApexChart
              type="bar"
              series={orderChartData.series}
              options={orderChartData.options}
              height={250}
            />
          </Box>
        </GridItem>

        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <ApexChart
              type="donut"
              series={doughnutData.series}
              options={doughnutData.options}
              height={250}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
 export default Dashboard