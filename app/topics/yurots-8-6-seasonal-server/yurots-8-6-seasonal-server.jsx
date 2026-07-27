import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-seasonal-server');
}

export default function Yurots86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-seasonal-server" />;
}
