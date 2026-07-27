import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-seasonal-server');
}

export default function Yurots15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-seasonal-server" />;
}
