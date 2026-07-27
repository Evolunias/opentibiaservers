import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-seasonal-server');
}

export default function Yurots772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-seasonal-server" />;
}
