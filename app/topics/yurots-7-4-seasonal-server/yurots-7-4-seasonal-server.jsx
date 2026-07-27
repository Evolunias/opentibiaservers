import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-seasonal-server');
}

export default function Yurots74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-seasonal-server" />;
}
