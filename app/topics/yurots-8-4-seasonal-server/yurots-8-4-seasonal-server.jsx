import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-seasonal-server');
}

export default function Yurots84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-seasonal-server" />;
}
