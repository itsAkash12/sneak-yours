import { Flex, Box, Grid, GridItem, Stat, StatLabel, StatNumber, Text, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaBoxOpen, FaMoneyBillWave, FaProductHunt } from "react-icons/fa";
import { MdPeople, MdStar } from "react-icons/md";
import ApexChart from "react-apexcharts";
function Dashboard() {
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
            data: [10, 20, 15, 25, 20, 30, 35],
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
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          },
        },
        series: [
          {
            name: "Orders",
            data: [30, 40, 45, 55, 60, 70],
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
            enabled: false,
          },
        },
        series: [15, 10, 20, 5, 10],
        labels: ["Electronics", "Books", "Clothing", "Home Goods", "Beauty"],
      };
  return (
    <Box px={[4, 8, 10]} py={[4, 6]}>
      <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb={6}>Dashboard</Text>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={[4, 6, 8]}>
        <GridItem>
          <Box borderRadius="lg" boxShadow="dark-lg" bgColor={useColorModeValue("white", "gray.700")} p={6}>
            <Stat>
              <StatLabel><FaProductHunt></FaProductHunt>Total Products</StatLabel>
              <StatNumber>{66}</StatNumber>
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
              <StatNumber>$5000</StatNumber>
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
              <StatNumber>{50}</StatNumber>
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
              <StatNumber>$5000</StatNumber>
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
              <StatNumber>5</StatNumber>
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