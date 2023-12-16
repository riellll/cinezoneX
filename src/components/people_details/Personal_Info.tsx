import React from 'react'

interface Props {
    KnownFor: string | undefined,
    Credits: number | undefined,
    Gender: number | undefined,
    Birthday: string,
    P_Birth: string | undefined,
    KnownAs: string[],
}
const Personal_Info = ({
KnownFor,
Credits,
Gender,
Birthday,
P_Birth,
KnownAs
}: Props) => {
//  console.log(Gender)
function calculateAge(birthdate: string): number{
  const today: Date = new Date();
  const birthdateDate: Date = new Date(birthdate);

  let age: number = today.getFullYear() - birthdateDate.getFullYear();
  const monthDiff: number = today.getMonth() - birthdateDate.getMonth();

  // If the birthdate hasn't occurred yet this year
  // or it's the month of the birthdate but the day is not reached
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
    age--;
  }

  return age;
}

  return (
    <>
    <h1 className="text-xl pb-3">Personal Info</h1>
            <div className="flex lg:flex-col flex-wrap gap-6 lg:gap-4">
                <div>
                    <h1 className="font-medium">Known For</h1>
                    <p className="font-light">{KnownFor}</p>
                </div>
                <div>
                    <h1 className="font-medium">Known Credits</h1>
                    <p className="font-light">{Credits}</p>
                </div>
                <div>
                    <h1 className="font-medium">Gender</h1>
                    <p className="font-light">{Gender === 1 ? 'Female' : 'Male'}</p>
                </div>
                <div>
                    <h1 className="font-medium">Birthday</h1>
                    <p className="font-light">{Birthday ? `${Birthday} (${calculateAge(Birthday)} years old)` : '-'}</p>
                </div>
                <div>
                    <h1 className="font-medium">Place of Birth</h1>
                    <p className="font-light">{P_Birth}</p>
                </div>
                <div>
                    <h1 className="font-medium">Also Known As</h1>
                    {KnownAs.map((item: string,index: number) => (
                    <p className="font-light">{item[0] ? item : '-'}</p>
                    ))}
                </div>
            </div>
    </>
  )
}

export default Personal_Info