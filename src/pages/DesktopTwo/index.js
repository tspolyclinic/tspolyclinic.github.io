import React from "react";

import { Img, Stack, Text, Grid, Button } from "components";

const DesktopTwoPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[32px] pb-[47px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-blue_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[18px] p-[27px] w-[100%]">
            <div className="flex flex-col justify-start max-w-[1381px] mb-[11px] sm:mb-[5px] md:mb-[7px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_halflogo1.png"
                className="max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] w-[15%]"
                alt="HalflogoOne"
              />
              <div className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                <Stack className="h-[726px] relative w-[100%]">
                  <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Text
                      className="font-semibold leading-[normal] text-black_900 w-[100%]"
                      as="h1"
                      variant="h1"
                    >
                      <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                        Find great{" "}
                      </span>
                      <span className="text-teal_800 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                        Doctors
                      </span>
                      <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                        {" "}
                        who can take your{" "}
                      </span>
                      <span className="text-teal_800 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                        insurance
                      </span>
                    </Text>
                    <Text
                      className="leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_600 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      We care because we love to serve humanity. It’s not just
                      our duty but a passion to serve you. Serving humanity
                      gives peace to our souls. We feel peace inside when we
                      worked for your health.
                    </Text>
                  </div>
                  <Stack className="absolute h-[726px] right-[0] sm:w-[100%] w-[56%]">
                    <Stack className="absolute h-[726px] w-[100%]">
                      <Stack className="absolute h-[723px] top-[0] w-[100%]">
                        <Stack className="absolute h-[723px] left-[0] sm:w-[100%] w-[93%]">
                          <Img
                            src="images/img_vector12.svg"
                            className="absolute bottom-[11%] h-[93px] left-[21%] max-w-[100%] w-[8%]"
                            alt="VectorTwelve"
                          />
                          <div className="absolute bg-teal_800 sm:h-[386px] md:h-[498px] h-[723px] rotate-[21deg] rounded-radius36199 w-[100%]"></div>
                        </Stack>
                        <Img
                          src="images/img_vector13.svg"
                          className="absolute h-[66px] max-w-[100%] right-[0] top-[43%] w-[27%]"
                          alt="VectorThirteen"
                        />
                      </Stack>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] justify-end sm:mx-[0] mx-[auto] sm:p-[15px] md:p-[19px] p-[29px] rounded-radius3235 sm:w-[100%] w-[81%]"
                        style={{
                          backgroundImage: "url('images/img_group6.png')",
                        }}
                      >
                        <div className="flex flex-col justify-start md:ml-[23px] ml-[34px] sm:mt-[140px] md:mt-[180px] mt-[263px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                          <div className="bg-teal_800 h-[138px] sm:h-[74px] md:h-[95px] rotate-[-90deg] rounded-radius50 w-[138px] sm:w-[73px] md:w-[94px]"></div>
                          <Img
                            src="images/img_vector15.svg"
                            className="max-w-[100%] sm:ml-[15px] md:ml-[19px] ml-[29px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[66%]"
                            alt="VectorFifteen"
                          />
                        </div>
                      </div>
                    </Stack>
                    <div className="absolute bg-teal_800 bottom-[1%] sm:h-[100px] md:h-[129px] h-[187px] right-[17%] rotate-[180deg] rounded-radius50 md:w-[128px] w-[187px] sm:w-[99px]"></div>
                  </Stack>
                </Stack>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1359px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Stack className="h-[663px] relative sm:w-[100%] w-[50%]">
                <Stack className="absolute h-[548px] top-[0] w-[100%]">
                  <Img
                    src="images/img_group33.svg"
                    className="absolute h-[548px] left-[0] max-w-[100%] sm:w-[100%] w-[96%]"
                    alt="GroupThirtyThree"
                  />
                  <Img
                    src="images/img_asianyoungmai.png"
                    className="absolute bottom-[0] h-[503px] max-w-[100%] right-[0] sm:w-[100%] w-[96%]"
                    alt="asianyoungmai"
                  />
                </Stack>
                <div className="absolute bg-teal_800 bottom-[0] md:h-[118px] h-[171px] sm:h-[92px] left-[0] rotate-[-180deg] rounded-radius8972 w-[27%]"></div>
              </Stack>
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                    About{" "}
                  </span>
                  <span className="text-teal_800 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                    Us
                  </span>
                </Text>
                <Text
                  className="leading-[normal] sm:mt-[26px] md:mt-[33px] mt-[49px] not-italic text-gray_600 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-black_900 text-[20px] font-inter font-bold">
                    Treatment Solution polyclinic
                  </span>
                  <span className="text-gray_600 text-[20px] font-inter font-normal">
                    {" "}
                    is most updated Specialized Polyclinic centrally air
                    conditioned and gives you a<br />
                    <br />
                    soothing ambiance to brighten up your mind. It is run by
                    well trained and patient friendly staffs. It is
                    <br />
                    strategically located on 
                  </span>
                  <span className="text-black_900 text-[20px] font-inter font-medium">
                    Hijalpukuria, besides Rupkatha Cinema Hall
                  </span>
                  <span className="text-gray_600 text-[20px] font-inter font-normal">
                    {" "}
                    and opposite{" "}
                  </span>
                  <span className="text-black_900 text-[20px] font-inter font-medium">
                    Indusland Bank Habra North
                    <br />
                    24 Parganas West Bengal
                  </span>
                  <span className="text-gray_600 text-[20px] font-inter font-medium">
                    .
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                <Text
                  className="font-semibold text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Management
                </Text>
                <Text
                  className="leading-[normal] sm:mt-[38px] md:mt-[50px] mt-[73px] not-italic text-black_900 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Treatment Solution polyclinic is formed by a team of like mind
                  entrepreneurs who share a common vision of contributing in the
                  Health Sector thereby impacting lives of common man. The
                  Company is owned by an NRI.
                  <br />
                  <br />
                  He has so many experience on Health care business of high
                  repute with over 20 years’ experience in Management and
                  entrepreneur skills.
                  <br />
                  <br />
                  Our doctors have the power to put the First.
                  <br />
                  Treatment Solution Polyclinic work with a single mission for
                  improving lives of our clients/patients by ensuring safe and
                  sound health.
                </Text>
              </div>
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Img
                  src="images/img_polygon2.svg"
                  className="max-w-[100%] sm:ml-[271px] md:ml-[350px] ml-[509px] w-[11%]"
                  alt="PolygonTwo"
                />
                <Stack className="h-[513px] sm:mt-[4px] md:mt-[5px] mt-[8px] relative w-[100%]">
                  <div className="absolute flex flex-col items-center justify-start outline outline-[35px] outline-white_A700 shadow-bs top-[0] w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[446px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group7.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle3.svg"
                        className="absolute h-[446px] max-w-[100%] w-[100%]"
                        alt="RectangleThree"
                      />
                    </Stack>
                  </div>
                  <Img
                    src="images/img_play.svg"
                    className="absolute bottom-[0] h-[86px] left-[7%] max-w-[100%] w-[15%]"
                    alt="play"
                  />
                </Stack>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[126px] sm:mt-[67px] md:mt-[86px] w-[100%]">
              <Stack className="bg-teal_800 h-[548px] mt-[1px] md:p-[14px] sm:p-[15px] p-[21px] relative rounded-bl-[258px] rounded-br-[0] rounded-tl-[0] rounded-tr-[241px] sm:w-[100%] w-[48%]">
                <Img
                  src="images/img_asianyoungmai_503X598.png"
                  className="absolute h-[503px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-bl-[0] rounded-br-[241px] rounded-tl-[231px] rounded-tr-[0] sm:w-[100%] w-[94%]"
                  alt="asianyoungmai One"
                />
              </Stack>
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Guiding Principles
                </Text>
                <div className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                  <Text
                    className="leading-[normal] not-italic text-gray_600 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    There are 5 guiding principles governing how all
                    relationships within the organization and with its
                    stakeholders (patients, doctors, suppliers, bankers, etc.)
                    should be approached:
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <div className="bg-teal_800 md:h-[3px] sm:h-[3px] h-[4px] sm:mb-[18px] md:mb-[24px] mb-[35px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[5%]"></div>
                      <Text
                        className="font-normal leading-[normal] md:ml-[15px] ml-[22px] sm:mx-[0] not-italic text-gray_600 sm:w-[100%] w-[93%]"
                        variant="body1"
                      >
                        Trust: Mutual and unconditional trust are important in
                        the development and maintenance of relationships, be it
                        business or personal.
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <div className="bg-teal_800 md:h-[3px] sm:h-[3px] h-[4px] sm:mb-[30px] md:mb-[39px] mb-[57px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[5%]"></div>
                      <Text
                        className="font-bold leading-[normal] md:ml-[15px] ml-[22px] sm:mx-[0] text-black_900 sm:w-[100%] w-[93%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[18px] font-inter">
                          Transparency:{" "}
                        </span>
                        <span className="text-gray_601 text-[18px] font-inter font-normal not-italic">
                          Decisions are to be made without any hidden agenda.
                          The why’s of any actions should always readily be
                          available for concerned parties to see.
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <div className="bg-teal_800 md:h-[3px] sm:h-[3px] h-[4px] sm:mb-[18px] md:mb-[24px] mb-[35px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[5%]"></div>
                      <Text
                        className="font-bold leading-[normal] md:ml-[15px] ml-[22px] sm:mx-[0] text-black_900 sm:w-[100%] w-[93%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[18px] font-inter">
                          Mutual Respect:{" "}
                        </span>
                        <span className="text-gray_600 text-[18px] font-inter font-normal not-italic">
                          It is important to respect the individual for what
                          he/she is and not to have prejudices of any type
                          towards anyone.
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <div className="bg-teal_800 md:h-[3px] sm:h-[3px] h-[4px] sm:mb-[18px] md:mb-[24px] mb-[35px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[5%]"></div>
                      <Text
                        className="font-bold leading-[normal] md:ml-[15px] ml-[22px] sm:mx-[0] text-black_900 sm:w-[100%] w-[93%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[18px] font-inter">
                          Win / Win:{" "}
                        </span>
                        <span className="text-gray_600 text-[18px] font-inter font-normal not-italic">
                          Dealings within relationships ought to be approached
                          from a position of considering the optimal outcome for
                          both parties.
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <div className="bg-teal_800 md:h-[3px] sm:h-[3px] h-[4px] sm:mb-[18px] md:mb-[24px] mb-[35px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[5%]"></div>
                      <Text
                        className="font-bold leading-[normal] md:ml-[15px] ml-[22px] sm:mx-[0] text-black_900 sm:w-[100%] w-[93%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[18px] font-inter">
                          Long Term Commitment:{" "}
                        </span>
                        <span className="text-gray_600 text-[18px] font-inter font-normal not-italic">
                          For any effective relationships to be built, it
                          requires time.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[105px] mt-[154px] sm:mt-[82px] sm:px-[0] w-[100%]">
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Text
                  className="font-semibold text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Staff
                </Text>
                <Text
                  className="leading-[normal] sm:mt-[20px] md:mt-[26px] mt-[39px] not-italic text-black_900 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Friendly & Experienced staff form the heart of our Centre.
                  They provide quality services and understand the needs of
                  Clients/Patients. Qualified Technician (Male/Female) with good
                  experience undergone necessary Training conducts the
                  investigations.
                </Text>
              </div>
              <Stack className="h-[526px] relative sm:w-[100%] w-[52%]">
                <div className="absolute sm:h-[224px] md:h-[289px] h-[419px] inset-[0] justify-center m-[auto] outline outline-[35px] outline-white_A700 shadow-bs sm:w-[100%] w-[90%]"></div>
                <div className="absolute border-4 border-solid border-teal_800 flex flex-col items-center justify-start md:p-[24px] p-[35px] sm:px-[15px] sm:py-[18px] shadow-bs w-[100%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[419px] sm:mb-[10px] md:mb-[13px] mb-[20px] md:mt-[10px] mt-[15px] sm:mt-[7px] relative w-[100%]"
                    style={{ backgroundImage: "url('images/img_group8.png')" }}
                  >
                    <Img
                      src="images/img_rectangle3.svg"
                      className="absolute h-[419px] max-w-[100%] w-[100%]"
                      alt="RectangleThree One"
                    />
                  </Stack>
                </div>
              </Stack>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1359px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack className="h-[663px] relative sm:w-[100%] w-[48%]">
              <Stack
                className="absolute bg-cover bg-no-repeat h-[548px] md:p-[15px] sm:p-[15px] p-[22px] top-[0] w-[100%]"
                style={{ backgroundImage: "url('images/img_group33.svg')" }}
              >
                <Img
                  src="images/img_asianyoungmai_503X429.png"
                  className="absolute h-[503px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] rounded-radius201 sm:w-[100%] w-[68%]"
                  alt="asianyoungmai Two"
                />
              </Stack>
              <div className="absolute bg-teal_800 bottom-[0] md:h-[118px] h-[171px] sm:h-[92px] left-[0] rotate-[-180deg] rounded-radius8972 w-[28%]"></div>
            </Stack>
            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                  Our
                </span>
                <span className="text-teal_800 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                  {" "}
                  Commitment
                </span>
              </Text>
              <Text
                className="leading-[normal] sm:mt-[26px] md:mt-[33px] mt-[49px] not-italic text-gray_600 w-[100%]"
                as="h6"
                variant="h6"
              >
                <span className="text-gray_600 text-[20px] font-inter font-normal">
                  The Company’s name and logo reflects the nature of the company
                  and its commitment to serve its clients/patients. In an effort
                  to gain the confidence of the clients/patients and expand the
                  market,{" "}
                </span>
                <span className="text-black_900 text-[20px] font-inter font-bold">
                  Treatment Solution Polyclinic
                </span>
                <span className="text-gray_600 text-[20px] font-inter font-normal">
                  {" "}
                  will work out plans and schemes to bring preventive care in
                  the forefront. It will educate the clients/patients on the
                  importance of timely health checkups to diagnose minor
                  ailments and advise treatment immediately. It will partner
                  with local council and Insurance Companies and Corporate
                  bodies to tap in more clients/patients. It will partner with
                  the Specialized doctors and provide quality health care.
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1352px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                Our{" "}
              </span>
              <span className="text-teal_800 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                Services
              </span>
            </Text>
            <div className="bg-light_green_200 flex flex-col items-center justify-end sm:mt-[30px] md:mt-[39px] mt-[58px] sm:p-[15px] md:p-[46px] p-[68px] w-[100%]">
              <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Grid className="gap-[100px] sm:gap-[53px] md:gap-[68px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Cardiology
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[22px] p-[32px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_80X89.png"
                        className="max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-radius10 sm:w-[100%] w-[59%]"
                        alt="RectangleEightyFour One"
                      />
                      <Text
                        className="mb-[10px] sm:mb-[5px] md:mb-[6px] sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Cardiac Surgery
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[28px] p-[41px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_88X92.png"
                        className="max-w-[100%] mt-[1px] sm:w-[100%] w-[69%]"
                        alt="RectangleEightyFour Two"
                      />
                      <Text
                        className="sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Neurology
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_96X92.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Three"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Neurosurgery
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_1.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Four"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Psychiatrist
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[17px] p-[25px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_2.png"
                        className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[56%]"
                        alt="RectangleEightyFour Five"
                      />
                      <Text
                        className="md:mb-[11px] mb-[16px] sm:mb-[8px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gastroenterology
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_3.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Six"
                      />
                      <Text
                        className="mb-[1px] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gynecology
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_4.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Seven"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Nephrology
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_5.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Eight"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Urology
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[23px] p-[34px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_6.png"
                        className="max-w-[100%] mt-[3px] sm:w-[100%] w-[62%]"
                        alt="RectangleEightyFour Nine"
                      />
                      <Text
                        className="sm:mb-[4px] md:mb-[6px] mb-[9px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Chest Medicine
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[21px] p-[31px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_7.png"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[60%]"
                        alt="RectangleEightyFour Ten"
                      />
                      <Text
                        className="mb-[10px] sm:mb-[5px] md:mb-[6px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        General Surgery
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_rectangle84_8.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Eleven"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Orthopedics
                      </Text>
                    </div>
                  </Grid>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[36px] md:mt-[46px] mt-[68px] sm:px-[0] w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_rectangle84_9.png"
                        className="max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[100%] w-[54%]"
                        alt="RectangleEightyFour Twelve"
                      />
                      <Text
                        className="sm:my-[10px] md:my-[13px] my-[20px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {" "}
                        General Medicine
                      </Text>
                    </div>
                    <Stack className="h-[222px] relative w-[19%]">
                      <Stack className="absolute bg-white_A700 h-[222px] sm:p-[15px] md:p-[26px] p-[38px] right-[0] rounded-radius15 shadow-bs1 w-[100%]">
                        <Img
                          src="images/img_rectangle84_10.png"
                          className="absolute h-[96px] inset-x-[0] max-w-[100%] mx-[auto] top-[17%] sm:w-[100%] w-[43%]"
                          alt="RectangleEightyFour Thirteen"
                        />
                      </Stack>
                      <Text
                        className="absolute bottom-[11%] inset-x-[0] leading-[normal] not-italic text-black_900 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Endocrinology and Diabetology
                      </Text>
                    </Stack>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_rectangle84_11.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Fourteen"
                      />
                      <Text
                        className="mb-[3px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {" "}
                        Dermatology.
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[26px] p-[38px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_rectangle84_12.png"
                        className="max-w-[100%] sm:w-[100%] w-[66%]"
                        alt="RectangleEightyFour Fifteen"
                      />
                      <Text
                        className="sm:mb-[2px] md:mb-[3px] mb-[5px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        ENT
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[36px] md:mt-[46px] mt-[68px] sm:mx-[0] sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[19%]">
                    <Img
                      src="images/img_rectangle84_13.png"
                      className="max-w-[100%] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[43%]"
                      alt="RectangleEightyFour Sixteen"
                    />
                    <Text
                      className="leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-black_900 text-center w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      24x7 available online
                      <br />
                      (virtually)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1248px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack
              className="bg-cover bg-no-repeat h-[549px] relative w-[36%]"
              style={{
                backgroundImage: "url('images/img_group6_white_A700.svg')",
              }}
            >
              <Img
                src="images/img_portraitsucces.png"
                className="absolute h-[544px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-bl-[0] rounded-br-[90px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[84%]"
                alt="portraitsucces"
              />
              <Img
                src="images/img_rectangle3_teal_800.svg"
                className="absolute h-[549px] max-w-[100%] w-[100%]"
                alt="RectangleThree Two"
              />
            </Stack>
            <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
              <Text
                className="font-medium leading-[normal] text-black_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                <span className="text-black_900 text-[50px] font-inter font-bold sm:text-[40px] md:text-[46px]">
                  A{" "}
                </span>
                <span className="text-teal_800 text-[50px] font-inter font-bold sm:text-[40px] md:text-[46px]">
                  SINGLE
                </span>
                <span className="text-black_900 text-[50px] font-inter font-bold sm:text-[40px] md:text-[46px]">
                  {" "}
                  DOORWAY
                </span>
                <span className="text-teal_800 text-[50px] font-inter font-bold sm:text-[40px] md:text-[46px]">
                  {" "}
                  TO
                </span>
                <span className="text-black_900 text-[50px] font-inter font-bold sm:text-[40px] md:text-[46px]">
                  {" "}
                  MULTISPECIALITY{" "}
                </span>
                <span className="text-teal_800 text-[50px] font-inter font-bold sm:text-[40px] md:text-[46px]">
                  CARE
                </span>
              </Text>
              <Text
                className="leading-[normal] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] not-italic text-gray_600 sm:w-[100%] w-[99%]"
                as="h6"
                variant="h6"
              >
                Treatment Solution Polyclinic is focused on one mission –
                Promoting the health of our patients through professional &
                Personal Care. We’re able to deliver on this because of our
                highly specialized & renowned doctors in charge And that gives
                them the power to put patients first.
                <br />
                <br />
                Because of this we’ve attracted more than 200 of the area’s most
                respected physicians & Advanced doctors.
                <br />
                <br />
                We have a Specialized Panel of doctors & Surgeons so we offer a
                doorway to meeting your health care needs. Our Care teams work
                closely together with one goal in mind – doing right for you.
                <br />
                <br />
                On site Services at several locations, including lab test and
                wide range of imaging services. Medical information anytime and
                helps you better meet your family’s health needs
              </Text>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1357px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] rounded-radius15 w-[100%]">
            <div className="flex flex-col sm:mx-[0] pr-[2px] pt-[2px] sm:px-[0] sm:w-[100%] w-[51%]">
              <div className="flex flex-col justify-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:px-[0] w-[100%]">
                <Text
                  className="font-bold ml-[3px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-black_900 text-[50px] font-inter sm:text-[40px] md:text-[46px]">
                    Our{" "}
                  </span>
                  <span className="text-teal_800 text-[50px] font-inter sm:text-[40px] md:text-[46px]">
                    Values
                  </span>
                </Text>
                <Text
                  className="leading-[normal] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-gray_600 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Treatment Solution Polyclinic First treat all Patients,
                  Visitor’s and one another with compassion and respect, work as
                  a team to provide quality care and services to patients and
                  contribute to ongoing improvement and excellence we do.
                </Text>
              </div>
              <div className="flex flex-col justify-start ml-[2px] sm:mt-[51px] md:mt-[66px] mt-[97px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                <Text
                  className="font-bold ml-[3px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-black_900 text-[50px] font-inter sm:text-[40px] md:text-[46px]">
                    Our{" "}
                  </span>
                  <span className="text-teal_800 text-[50px] font-inter sm:text-[40px] md:text-[46px]">
                    Vision
                  </span>
                </Text>
                <Text
                  className="sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  To Promote the health of our patients with personalized care.
                </Text>
              </div>
              <div className="flex flex-col justify-start sm:mt-[51px] md:mt-[66px] mt-[96px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <Text
                  className="font-bold ml-[3px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-black_900 text-[50px] font-inter sm:text-[40px] md:text-[46px]">
                    Our{" "}
                  </span>
                  <span className="text-teal_800 text-[50px] font-inter sm:text-[40px] md:text-[46px]">
                    Mission
                  </span>
                </Text>
                <Text
                  className="sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  The best Place to receive care. The best place to provide care
                </Text>
              </div>
            </div>
            <Stack className="h-[598px] relative rounded-radius15 sm:w-[100%] w-[47%]">
              <Img
                src="images/img_portraitfemale.png"
                className="absolute h-[545px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius15 sm:w-[100%] w-[91%]"
                alt="portraitfemale"
              />
              <div className="absolute border-bw12 border-solid border-teal_800 sm:h-[319px] md:h-[412px] h-[598px] rounded-radius15 shadow-bs1 w-[100%]"></div>
            </Stack>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1359px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack className="h-[785px] relative sm:w-[100%] w-[50%]">
              <Stack className="absolute bg-white_A700 h-[649px] inset-y-[0] my-[auto] sm:p-[15px] md:p-[29px] p-[43px] right-[4%] rounded-radius20 sm:w-[100%] w-[80%]">
                <Img
                  src="images/img_asianyoungmai_563X447.png"
                  className="absolute h-[563px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius20 sm:w-[100%] w-[84%]"
                  alt="asianyoungmai Three"
                />
              </Stack>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] shadow-bs2 sm:w-[100%] w-[43%]"
                style={{ backgroundImage: "url('images/img_group10.svg')" }}
              >
                <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Text
                    className="not-italic text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Professional
                  </Text>
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Doctors
                  </Text>
                </div>
              </div>
              <Stack className="absolute h-[148px] p-[1px] w-[26%]">
                <div className="absolute bg-white_A700 bottom-[11%] flex flex-col sm:h-[53px] md:h-[69px] h-[99px] inset-x-[0] items-center justify-start mx-[auto] rounded-radius50 sm:w-[52px] md:w-[68px] w-[99px]">
                  <div className="flex flex-col sm:h-[53px] md:h-[69px] h-[99px] items-center justify-end outline outline-[9px] outline-teal_800 px-[1px] rounded-radius50 w-[100%]">
                    <Img
                      src="images/img_doctor1.png"
                      className="max-w-[100%] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:w-[100%] w-[80%]"
                      alt="doctorOne"
                    />
                    <Img
                      src="images/img_vector14.svg"
                      className="max-w-[100%] sm:w-[100%] w-[42%]"
                      alt="VectorFourteen"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Stack className="h-[71px] mt-[12px] sm:mt-[6px] md:mt-[8px] relative sm:w-[100%] w-[75%]">
                          <Stack className="absolute h-[68px] inset-y-[0] left-[0] my-[auto] sm:w-[100%] w-[76%]">
                            <Stack className="absolute bottom-[0] h-[60px] left-[0] sm:w-[100%] w-[85%]">
                              <Stack className="absolute bottom-[0] h-[53px] left-[0] sm:w-[100%] w-[84%]">
                                <Stack className="absolute bottom-[0] h-[45px] left-[0] sm:w-[100%] w-[88%]">
                                  <Stack className="absolute bottom-[0] h-[31px] left-[0] sm:w-[100%] w-[78%]">
                                    <Text
                                      className="absolute bottom-[0] flex items-center left-[0] not-italic rotate-[84deg] text-black_900 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Q
                                    </Text>
                                    <Text
                                      className="absolute not-italic right-[0] rotate-[72deg] text-black_900 top-[0] w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      u
                                    </Text>
                                  </Stack>
                                  <Text
                                    className="absolute not-italic right-[0] rotate-[61deg] text-black_900 top-[0] w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    a
                                  </Text>
                                </Stack>
                                <Text
                                  className="absolute not-italic right-[0] rotate-[52deg] text-black_900 top-[0] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  l
                                </Text>
                              </Stack>
                              <Text
                                className="absolute not-italic right-[0] rotate-[45deg] text-black_900 top-[0] w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                i
                              </Text>
                            </Stack>
                            <Text
                              className="absolute not-italic right-[0] rotate-[37deg] text-black_900 top-[0] w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              t
                            </Text>
                          </Stack>
                          <Text
                            className="absolute not-italic right-[0] rotate-[28deg] text-black_900 top-[0] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            y
                          </Text>
                        </Stack>
                        <Text
                          className="not-italic rotate-[9deg] text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          &
                        </Text>
                      </div>
                      <Text
                        className="ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic rotate-[104deg] text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        h
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic rotate-[115deg] text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        g
                      </Text>
                      <Stack className="h-[25px] ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[1px] relative w-[34%]">
                        <Text
                          className="absolute bottom-[0] not-italic right-[0] rotate-[135deg] text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          H
                        </Text>
                        <Text
                          className="absolute left-[0] not-italic rotate-[125deg] text-black_900 top-[0] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          i
                        </Text>
                      </Stack>
                    </div>
                    <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                      <Stack className="h-[44px] md:mr-[11px] mr-[17px] sm:mr-[9px] relative sm:w-[100%] w-[78%]">
                        <Stack className="absolute h-[31px] left-[0] top-[0] sm:w-[100%] w-[88%]">
                          <Stack className="absolute h-[18px] left-[0] top-[0] sm:w-[100%] w-[52%]">
                            <Text
                              className="absolute flex items-center left-[0] not-italic rotate-[-10deg] text-black_900 top-[0] w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              P
                            </Text>
                            <Text
                              className="absolute bottom-[0] not-italic right-[0] rotate-[-20deg] text-black_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              r
                            </Text>
                          </Stack>
                          <Text
                            className="absolute bottom-[16%] not-italic right-[22%] rotate-[-30deg] text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            o
                          </Text>
                          <Text
                            className="absolute not-italic rotate-[-40deg] text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            f
                          </Text>
                        </Stack>
                        <Text
                          className="absolute bottom-[0] not-italic right-[0] rotate-[-50deg] text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          e
                        </Text>
                      </Stack>
                      <Text
                        className="sm:ml-[25px] md:ml-[33px] ml-[48px] not-italic rotate-[-61deg] text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        s
                      </Text>
                      <div className="flex flex-col justify-start md:ml-[36px] ml-[53px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                        <Text
                          className="not-italic rotate-[-71deg] text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          s
                        </Text>
                        <Text
                          className="ml-[3px] not-italic rotate-[-80deg] text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          i
                        </Text>
                      </div>
                      <Stack className="h-[65px] sm:ml-[18px] md:ml-[24px] ml-[35px] mt-[2px] relative sm:w-[100%] w-[48%]">
                        <Stack className="absolute h-[62px] right-[0] top-[0] sm:w-[100%] w-[86%]">
                          <Stack className="absolute h-[50px] right-[0] top-[0] sm:w-[100%] w-[74%]">
                            <Stack className="absolute h-[41px] right-[0] top-[0] sm:w-[100%] w-[87%]">
                              <Stack className="absolute h-[26px] right-[0] top-[0] sm:w-[100%] w-[74%]">
                                <Text
                                  className="absolute not-italic right-[0] rotate-[-89deg] text-black_900 top-[0] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  o
                                </Text>
                                <Text
                                  className="absolute bottom-[0] left-[0] not-italic rotate-[-100deg] text-black_900 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  n
                                </Text>
                              </Stack>
                              <Text
                                className="absolute bottom-[0] left-[0] not-italic rotate-[-111deg] text-black_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                a
                              </Text>
                            </Stack>
                            <Text
                              className="absolute bottom-[0] left-[0] not-italic rotate-[-120deg] text-black_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              l
                            </Text>
                          </Stack>
                          <Text
                            className="absolute bottom-[0] left-[0] not-italic rotate-[-129deg] text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            s
                          </Text>
                        </Stack>
                        <Text
                          className="absolute bottom-[0] left-[0] not-italic rotate-[-137deg] text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          .
                        </Text>
                      </Stack>
                    </div>
                  </div>
                </div>
              </Stack>
            </Stack>
            <div className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                  Why
                </span>
                <span className="text-teal_800 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                  {" "}
                  Us
                </span>
                <span className="text-black_900 text-[70px] font-inter sm:text-[48px] md:text-[48px]">
                  {" "}
                  ?
                </span>
              </Text>
              <Text
                className="leading-[normal] sm:mt-[26px] md:mt-[33px] mt-[49px] not-italic text-gray_600 w-[100%]"
                as="h6"
                variant="h6"
              >
                <span className="text-black_900 text-[20px] font-inter font-bold">
                  Treatment Solution Polyclinic
                </span>
                <span className="text-gray_600 text-[20px] font-inter font-normal">
                  {" "}
                  is a specialized Polyclinic. It has latest state of art
                  equipment. The Centre is centrally air conditioned and gives
                  you a soothing ambience to brighten up your mind. It is run by
                  well trained and patient friendly staffs. It is strategically
                  located on Ground Floor near Rupkatha Cinema Hall and opposite
                  IndusInd Bank and is accessible by all modes of transport.
                  <br />
                  <br />
                  <br />
                </span>
                <span className="text-teal_800 text-[20px] font-inter font-bold">
                  OPEN HOURS :<br />
                  <br />
                </span>
                <span className="text-black_900 text-[20px] font-inter font-semibold">
                  Mon - Sat :{" "}
                </span>
                <span className="text-gray_600 text-[20px] font-inter font-normal">
                  8:00 AM - 8:00 PM
                  <br />
                </span>
                <span className="text-black_900 text-[20px] font-inter font-semibold">
                  Sunday :
                </span>
                <span className="text-gray_600 text-[20px] font-inter font-normal">
                  {" "}
                  8:00 AM - 2:00 PM
                  <br />
                </span>
                <span className="text-black_900 text-[20px] font-inter font-semibold">
                  Phone :
                </span>
                <span className="text-gray_600 text-[20px] font-inter font-normal">
                  {" "}
                  03216350140
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1340px] ml-[auto] mr-[auto] md:mt-[124px] mt-[181px] sm:mt-[96px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold text-teal_800 w-[auto]"
              as="h1"
              variant="h1"
            >
              Team
            </Text>
            <div className="flex flex-col justify-start mt-[103px] sm:mt-[54px] md:mt-[70px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text
                  className="border-bw3 border-solid border-teal_800 font-bold sm:px-[15px] md:px-[24px] px-[35px] sm:py-[14px] md:py-[18px] py-[27px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body1"
                >
                  Cardiology
                  <br />
                </Text>
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Physician
                  <br />
                </Text>
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Chest medicine
                  <br />
                </Text>
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Orthopedics
                  <br />
                </Text>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]">
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Urology
                  <br />
                </Text>
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Neuro Medicine
                  <br />
                </Text>
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Neurosurgery
                  <br />
                </Text>
                <div className="border-bw3 border-solid border-teal_800 flex flex-col items-center sm:mx-[0] md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px] rounded-radius25 sm:w-[100%] w-[21%]">
                  <Text
                    className="leading-[normal] mt-[1px] sm:mx-[0] text-center text-teal_800 sm:w-[100%] w-[85%]"
                    variant="body2"
                  >
                    Gynecology &amp; Obs
                    <br />
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]">
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  ENT
                  <br />
                </Text>
                <Text
                  className="border-bw3 border-solid border-teal_800 sm:p-[15px] md:px-[24px] px-[35px] md:py-[19px] py-[29px] rounded-radius25 text-teal_800 w-[auto]"
                  variant="body2"
                >
                  Nephrology
                  <br />
                </Text>
                <Button className="cursor-pointer font-bold min-w-[21%] text-[16px] text-center text-teal_800 w-[max-content]">
                  Dermatology
                </Button>
                <div className="border-bw3 border-solid border-teal_800 flex flex-col items-center sm:mx-[0] md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px] rounded-radius25 sm:w-[100%] w-[21%]">
                  <Text
                    className="leading-[normal] mt-[1px] sm:mx-[0] text-center text-teal_800 sm:w-[100%] w-[85%]"
                    variant="body2"
                  >
                    Diabetes, Thyroid and Endocrinology
                    <br />
                  </Text>
                </div>
              </div>
              <Button className="cursor-pointer font-bold min-w-[21%] ml-[2px] sm:mt-[22px] md:mt-[29px] mt-[43px] text-[16px] text-center text-teal_800 w-[max-content]">
                Dietitian
              </Button>
            </div>
          </div>
          <div className="bg-blue_50 flex flex-col items-center justify-end md:mt-[124px] mt-[181px] sm:mt-[96px] md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1384px] ml-[auto] mr-[auto] sm:mt-[33px] md:mt-[42px] mt-[62px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Img
                    src="images/img_halflogo1.png"
                    className="max-w-[100%] w-[32%]"
                    alt="HalflogoOne One"
                  />
                  <div className="flex flex-col justify-start sm:mt-[21px] md:mt-[28px] mt-[41px] sm:px-[0] w-[100%]">
                    <Text
                      className="leading-[normal] not-italic text-gray_600 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      <span className="text-black_900 text-[20px] font-inter font-bold">
                        Treatment Solution polyclinic
                      </span>
                      <span className="text-gray_600 text-[20px] font-inter font-normal">
                        {" "}
                        is most updated Specialized Polyclinic centrally air
                        conditioned and gives you a<br />
                        <br />
                        soothing ambiance to brighten up your mind. It is run by
                        well trained and patient friendly staffs. It is
                        <br />
                        strategically located on 
                      </span>
                      <span className="text-black_900 text-[20px] font-inter font-medium">
                        Hijalpukuria, besides Rupkatha Cinema Hall
                      </span>
                      <span className="text-gray_600 text-[20px] font-inter font-normal">
                        {" "}
                        and opposite{" "}
                      </span>
                      <span className="text-black_900 text-[20px] font-inter font-medium">
                        Indusland Bank Habra North
                        <br />
                        24 Parganas West Bengal
                      </span>
                      <span className="text-gray_600 text-[20px] font-inter font-medium">
                        .
                      </span>
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="text-black_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Follow Us on :
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer sm:h-[23px] md:h-[29px] h-[42px] max-w-[100%] sm:w-[22px] md:w-[28px] w-[42px]"
                            onClick={handleNavigate1}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_instagram.svg"
                            className="sm:h-[23px] md:h-[29px] h-[42px] max-w-[100%] sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="instagram"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer sm:h-[23px] md:h-[29px] h-[42px] max-w-[100%] sm:w-[22px] md:w-[28px] w-[42px]"
                            onClick={handleNavigate}
                            alt="facebook"
                          />
                          <Img
                            src="images/img_play_42X57.svg"
                            className="max-w-[100%] w-[23%]"
                            alt="play One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Address
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_location.svg"
                        className="max-w-[100%] w-[4%]"
                        alt="location"
                      />
                      <a
                        href={
                          "https://www.google.com/maps/place/22%C2%B050'21.8%22N+88%C2%B039'13.0%22E/@22.8409166,88.6512959,16z/data=!4m5!3m4!1s0x0:0x9c598584378b7b89!8m2!3d22.839389!4d88.653608"
                        }
                        target="_blank"
                        className="font-semibold leading-[normal] md:ml-[11px] ml-[16px] sm:mx-[0] text-[18px] text-gray_700 sm:w-[100%] w-[93%]"
                        rel="noreferrer"
                      >
                        Plot No. 103, Nr. Nirma University, Mouje - Khoraj,
                        Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 382481
                      </a>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                      <Img
                        src="images/img_call.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="call"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] text-gray_700"
                        variant="body1"
                      >
                        9734570170
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="flex-shrink-0 max-w-[100%] w-[7%]"
                        alt="arrowdown"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                        variant="body1"
                      >
                        t.s.polyclinic.habra@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[20px] md:mt-[26px] mt-[39px] w-[100%]">
                <Text
                  className="font-semibold text-teal_800 w-[auto]"
                  variant="body1"
                >
                  Designed by - Hetal Ganatra
                </Text>
                <Text
                  className="font-semibold text-teal_800 w-[auto]"
                  variant="body1"
                >
                  Proprietor - Pritish Kumar Dey
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
