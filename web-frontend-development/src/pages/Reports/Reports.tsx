import { Link } from "react-router-dom";
import { useState } from "react";
import StationReport from "./components/StationReport";
import styled from 'styled-components';
import Button from "@mui/material/Button";
import IStationReport from "./components/IStationReport";
import IAppReport from "./components/IAppReport";
import AppReport from "./components/AppReport";

const ReportList = styled.div`
  // display: flex;
  // flex-direction: column;
  // border: 1px solid black;
  // max-width: 70%;
  // height: 71vh;
  // margin: 4rem auto;
  // overflow-y: auto;
  // scroll-behavior: smooth;
`

const ReportsToShow: IStationReport[] = [
  {
    reportType: "Mal estado",
    reportMessage: "He sido mordidoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata ",
    stationId: "1",
    stationType: "Coche",
    date: "2020-01-01",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
  {
    reportType: "Niños molestos",
    reportMessage: "Un niño me ha pinchado la bici",
    stationId: "1",
    stationType: "Bici",
    date: "2020-01-02",
  },
];

const AppReports: IAppReport[] = [
  {
    type: "Bug",
    platform: "Android",
    os: "Android",
    subject: "Bug",
    details: "He sido mordido mordid omordido mordid omordido mordido mordidopor una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata He sido mordido por una rata ",
    user_id: "1321314124243",
    date: "2020/01/01",
  },
  {
    type: "Bug",
    platform: "Android",
    os: "Android",
    subject: "Bug",
    details: "He sido mordido por una rata",
    user_id: "1321314124243",
    date: "2020/01/01",
  },
  {
    type: "Bug",
    platform: "Android",
    os: "Android",
    subject: "Bug",
    details: "He sido mordido por una rata",
    user_id: "1321314124243",
    date: "2020/01/01",
  },
];

const Reports = () => {
  const [isStationReport, setIsStationReport] = useState<boolean>(true);
  return (
    <ReportList>
      <Button onClick={() => setIsStationReport(!isStationReport)}>Change report type</Button>
      {isStationReport
        ? ReportsToShow.map((report, index) => {
            const {
              reportType,
              reportMessage,
              stationId,
              stationType,
              date,
            } = report;
            return (
              <StationReport
                key={index}
                reportType={reportType}
                reportMessage={reportMessage}
                stationId={stationId}
                stationType={stationType}
                date={date}
              />
            );
          })
        : AppReports.map((report, index) => {
          const {
            type,
            platform,
            os,
            subject,
            details,
            user_id,
            date,
          } = report;
          return (
            <AppReport
              key={index}
              type={type}
              platform={platform}
              os={os}
              subject={subject}
              details={details}
              user_id={user_id}
              date={date}
            />
          );
        })}
    </ReportList>
  );
};
export default Reports;
