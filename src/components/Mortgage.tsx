import { useEffect, useState } from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { FaNairaSign } from "react-icons/fa6";

interface DoughnutData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
}

interface DoughnutOptions {
  // Define Chart.js options
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  // Add other properties if needed
}
export default function Mortgage() {
  const [purchasePrice, setPurchasePrice] = useState<number>(1000000);
  const [downPayment, setDownPayment] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0.001);
  const [loanTerm, setLoanTerm] = useState<number>(1);
  const [totalMortgage, setTotalMortgage] = useState<number>();
  const [propertyMonthlyPrincipal, setPropertyMonthlyPrincipal] =
    useState<number>();
  const [propertyMonthlyInterest, setPropertyMonthlyInterest] =
    useState<number>();
  const [propertyInsurance, setPropertyInsurance] = useState<number>();
  const [propertyTax, setPropertyTax] = useState<number>();
  const [chartData, setChartData] = useState<DoughnutData>({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState<DoughnutOptions>({});
  Chart.register(ArcElement, Tooltip, Legend, Title);
  Chart.defaults.plugins.tooltip.backgroundColor = "#030718";
  //   Chart.defaults.plugins.legend.position = "top";
  Chart.defaults.plugins.legend.title.display = false;
  Chart.defaults.plugins.legend.display = false;
  //   Chart.defaults.plugins.legend.title.color = "#f9f9f9";
  //   Chart.defaults.plugins.legend.color = "#f9f9f9";
  //   Chart.defaults.plugins.legend.title.text = "60 of 100 Done";
  //   Chart.defaults.font.family = "Helvetica Neue";
  //   Chart.defaults.plugins.legend.title.font = "Helvetica Neue";
  useEffect(() => {
    const principal = purchasePrice - downPayment;
    const monthlyPrincipal = principal / (loanTerm * 12);
    const monthlyInterest = interest / 100;
    const monthlyPrincipalInterest =
      monthlyPrincipal * ((100 + interest / 12) / 100);
    const insurance = purchasePrice / 200; //insurance at 0.5%
    const tax = purchasePrice / 100;
    const monthlyInsuranceTax = (insurance + tax) / 12;
    const monthLoanTerm = loanTerm * 12;
    const monthlyMortgage =
      (principal * (monthlyInterest / 12)) /
      (1 - (1 + monthlyInterest / 12) ** -monthLoanTerm);

    const totalMonthlyMortgage = monthlyMortgage + monthlyInsuranceTax;
    setTotalMortgage(Math.round(totalMonthlyMortgage));
    setPropertyMonthlyPrincipal(Math.round(monthlyPrincipal));
    setPropertyMonthlyInterest(
      Math.round(monthlyPrincipalInterest - monthlyPrincipal)
    );
    setPropertyInsurance(Math.round(insurance / 12));
    setPropertyTax(Math.round(tax / 12));
    const data: DoughnutData = {
      labels: ["Principal", "Interest", "Insurance", "Taxes"],
      datasets: [
        {
          data: [principal, monthlyInterest, insurance, tax],
          backgroundColor: ["#b0b0b6", "#7f7f7f", "#606060", "#3b3b3b"],
          hoverBackgroundColor: ["#979797", "#606060", "#525252", "#303030"],
        },
      ],
    };

    const options: DoughnutOptions = {
      responsive: true,
      maintainAspectRatio: true,
    };

    setChartData(data);
    setChartOptions(options);
  }, [purchasePrice, downPayment, interest, loanTerm]);
  return (
    <>
      <div id="mortgage" className="w-full h-full text-offwhite bg-[#5b8181]">
        <div className="px-[3vw] py-[7vh] bg-[rgba(3,_7,_24,_0.3)] md:px-[6.5vw]">
          <div>
            <h2 className="text-3xl">Mortgage Calculator</h2>
            <p>
              simply enter the price of the home, your down payment, and details
              about the home loan to calculate your mortgage payment breakdown,
              schedule, and more.
            </p>
          </div>
          <div className="py-[5vh] grid grid-cols-1 grid-rows-2 gap-5 items-center justify-center md:grid-cols-2 md:grid-rows-1">
            <div className="flex flex-col gap-y-5 items-center">
              <label className="w-full">
                <p className="text-sm">Purchase Price</p>
                <p>
                  <FaNairaSign />
                  <span className="align-middle text-3xl">
                    {purchasePrice.toLocaleString()}
                  </span>
                </p>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={1000000}
                  min={1000000}
                  max={100000000}
                  step={1000}
                  value={purchasePrice}
                  onChange={(val) => setPurchasePrice(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack bg="rgba(3, 7, 24,0.5)" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <p className="text-[#b0b0b6] text-xs flex flex-row items-center justify-between">
                  <span>
                    <FaNairaSign />
                    1,000,000
                  </span>
                  <span>
                    <FaNairaSign />
                    100,000,000
                  </span>
                </p>
              </label>
              <label className="w-full">
                <p className="text-sm">Down Payment</p>
                <p>
                  <FaNairaSign />
                  <span className="align-middle text-3xl">
                    {downPayment.toLocaleString()}
                  </span>
                </p>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={0}
                  min={0}
                  max={purchasePrice}
                  step={1000}
                  value={downPayment}
                  onChange={(val) => setDownPayment(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack bg="rgba(3, 7, 24,0.5)" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <p className="text-[#b0b0b6] text-xs flex flex-row items-center justify-between">
                  <span>0%</span>
                  <span>100%</span>
                </p>
              </label>
              <label className="w-full">
                <p className="text-sm">Annual Interest Rate</p>
                <p>
                  <span className="align-middle text-3xl">{interest}%</span>
                </p>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={0.001}
                  min={0.001}
                  max={20}
                  step={0.001}
                  value={interest}
                  onChange={(val) => setInterest(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack bg="rgba(3, 7, 24,0.5)" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <p className="text-[#b0b0b6] text-xs flex flex-row items-center justify-between">
                  <span>0%</span>
                  <span>20%</span>
                </p>
              </label>
              <label className="w-full">
                <p className="text-sm">Loan Duration</p>
                <p>
                  <span className="align-middle text-3xl">
                    {loanTerm}
                    {loanTerm > 1 ? " Years" : "Year"}
                  </span>
                </p>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={1}
                  min={1}
                  max={30}
                  step={1}
                  value={loanTerm}
                  onChange={(val) => setLoanTerm(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack bg="rgba(3, 7, 24,0.5)" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <p className="text-[#b0b0b6] text-xs flex flex-row items-center justify-between">
                  <span>Short=Term</span>
                  <span>Long-Term</span>
                </p>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                {/* <div className="relative m-auto w-fit !text-offwhite"> */}
                <Doughnut
                  data={chartData}
                  options={chartOptions}
                  // className="!w-full !h-full"
                />
                <div className="w-full absolute top-[40%] text-center">
                  <p className="flex flex-col items-center justify-center">
                    <span className="text-xl">
                      {totalMortgage?.toLocaleString()}
                    </span>
                    <span className="text-sm">Monthly</span>
                  </p>
                </div>
                {/* </div> */}
              </div>
              <div className="w-full xl:w-[60%]">
                <div className="w-full p-3 flex flex-row gap-x-2 items-center justify-center">
                  <span className="block w-[20px] h-[20px] rounded-[100%] bg-[#b0b0b6]"></span>
                  <p>Principal</p>
                  <span className="ml-auto">
                    <FaNairaSign />
                    {propertyMonthlyPrincipal}
                  </span>
                </div>
                <div className="w-full p-3 flex flex-row gap-x-2 items-center justify-center">
                  <span className="block w-[20px] h-[20px] rounded-[100%] bg-[#7f7f7f]"></span>
                  <p>Interest</p>
                  <span className="ml-auto">
                    <FaNairaSign />
                    {propertyMonthlyInterest}
                  </span>
                </div>
                <div className="w-full p-3 flex flex-row gap-x-2 items-center justify-center">
                  <span className="block w-[20px] h-[20px] rounded-[100%] bg-[#606060]"></span>
                  <p>Insurance(0.5%)</p>
                  <span className="ml-auto">
                    <FaNairaSign />
                    {propertyInsurance}
                  </span>
                </div>
                <div className="w-full p-3 flex flex-row gap-x-2 items-center justify-center">
                  <span className="block w-[20px] h-[20px] rounded-[100%] bg-[#3b3b3b]"></span>
                  <p>Tax(1%)</p>
                  <span className="ml-auto">
                    <FaNairaSign />
                    {propertyTax}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
