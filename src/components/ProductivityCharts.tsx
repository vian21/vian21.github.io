import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";

import { ProgrammingData } from "../assets/hours";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export const ProductivityCharts = () => {
  const cleanedData: CleanedData = cleanData(ProgrammingData);

  const programmingData = {
    labels: [...Array.from(cleanedData.languages)],
    datasets: [
      {
        label: "hours",
        data: [...Object.values(cleanedData.programmingHours)],
      },
    ],
  };

  const fieldStats = {
    labels: [...Array.from(cleanedData.types)],
    datasets: [
      {
        label: "hours",
        data: [...Object.values(cleanedData.programmingFieldHours)],
      },
    ],
  };

  return (
    <div>
      <div className="w-11/12 m-auto lg:w-4/5 mt-3">
        <Pie
          data={programmingData}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="w-11/12 m-auto lg:w-4/5 mt-5">
        <Pie
          data={fieldStats}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

interface Record {
  languages: string[];
  type: string[];
  hours: number;
}

interface CleanedData {
  languages: Set<string>;
  types: Set<string>;
  programmingHours: AssociativeArray;
  programmingFieldHours: AssociativeArray;
}

interface AssociativeArray {
  [key: string]: number;
}

function cleanData(data: Record[]) {
  const cleanedData: CleanedData = {
    languages: new Set(),
    types: new Set(),
    programmingHours: {},
    programmingFieldHours: {},
  };

  data.map((item) => {
    //add programming languages to set
    item.languages.map((language) => {
      cleanedData.languages.add(language);

      //increment the number of hours for each language
      cleanedData.programmingHours[language] =
        (cleanedData.programmingHours[language] || 0) + Number(item.hours);
    });

    item.type.map((field) => {
      cleanedData.types.add(field);

      //increment the number of hours for each field
      cleanedData.programmingFieldHours[field] =
        (cleanedData.programmingFieldHours[field] || 0) + Number(item.hours);
    });
  });

  return cleanedData;
}
