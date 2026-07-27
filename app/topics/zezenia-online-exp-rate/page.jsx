import ZezeniaOnlineExpRateKeywordPage, { generateMetadata } from './zezenia-online-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineExpRateKeywordPage />;
}
