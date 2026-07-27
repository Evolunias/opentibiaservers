import ValantisOnlinePage, { generateMetadata } from './valantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValantisOnlinePage />;
}
