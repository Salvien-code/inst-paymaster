import React, { FC } from "react";
import {
  Typography,
  Popover,
  PopoverContent,
  PopoverHandler,
  IconButton,
  Chip,
  Button,
  Card,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import { formatAddress } from "../../lib/formatAddress";

interface IProps {
  route: React.Dispatch<React.SetStateAction<string>>;
}

const Account: FC<IProps> = ({ route }) => {
  return (
    <Card className="bg-inherit h-full shadow-none text-white text-center mx-auto w-full">
      <div>
        <Typography variant="h5">Contract Address</Typography>
        <Popover>
          <PopoverHandler>
            <Typography
              className="truncate text-sm font-bold flex justify-center"
              as="a"
              onClick={() =>
                navigator.clipboard.writeText(
                  "0x70E2D5aA970d84780D81a2c4164b984Abaa94527"
                )
              }
            >
              {formatAddress("0x70E2D5aA970d84780D81a2c4164b984Abaa94527")}
              <span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
                  <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
                </svg>
              </span>
            </Typography>
          </PopoverHandler>
          <PopoverContent>copied.</PopoverContent>
        </Popover>
      </div>

      <div className="flex min-w-20 justify-around px-8 py-6">
        <IconButton size="lg">
          <svg
            className="w-8 h-8 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </IconButton>
        <IconButton size="lg">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
              clipRule="evenodd"
            ></path>
            <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path>
          </svg>
        </IconButton>
      </div>
      <div className="inline-flex gap-3 justify-start w-full">
        <Chip variant="gradient" value="zkSync" />
        <Typography> - Balance</Typography>
      </div>
      <CardBody className="w-full bg-white rounded-lg mt-4 h-full flex divider overflow-y-auto">
        <div className="w-full h-fit flex items-center">
          <Avatar src="/ethLogo.jpg" alt="avatar" className="flex-shrink-0" />
          <div className="flex-1 min-w-0 text-left pl-2">
            <Typography variant="h4" color="gray">
              Ether
            </Typography>
          </div>
          <div className="text-right ">
            <Typography className="font-medium" color="gray">
              0.311 zkETH
            </Typography>
          </div>
        </div>
      </CardBody>
      <div className="absolute bottom-3 right-3">
        <Button
          size="sm"
          variant="gradient"
          className="rounded-3xl flex lowercase"
          onClick={() => route("paymasters")}
        >
          <Typography>paymasters</Typography>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </Card>
  );
};

export default Account;
