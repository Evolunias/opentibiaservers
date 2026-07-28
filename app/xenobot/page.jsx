import XenobotPage, { generateMetadata } from './xenobot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XenobotPage />;
}
