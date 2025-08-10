import { OrdersFilter, WeekFilter } from "../../utils/constants";

const { Day, Week, Month } = OrdersFilter;
const { Mon, Tue, Wed, Thu, Fri, Sat, Sun } = WeekFilter;

export const filterPeriods: OrdersFilter[] = [Day, Week, Month];
export const daysOfWeek: WeekFilter[] = [Mon, Tue, Wed, Thu, Fri, Sat, Sun];
export const mockMonth: string[] = [
  "Jun 1",
  "Jun 2",
  "Jun 3",
  "Jun 4",
  "Jun 5",
  "Jun 6",
  "Jun 7",
];
// export const ordersList: IOrder[] = [
//   { num: 234, table: 28, status: Open, price: 34, time: "12:20" },
//   { num: 235, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 236, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 237, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 238, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 239, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 240, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 121, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 231, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 341, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 451, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 561, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 671, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 781, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 891, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 901, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 981, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 871, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 761, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 651, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 541, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 431, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 322, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 211, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 131, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 251, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 361, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 771, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 441, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 111, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 123, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 321, table: 28, status: Active, price: 34, time: "12:20" },
//   { num: 101, table: 28, status: Active, price: 34, time: "12:20" },
// ];
