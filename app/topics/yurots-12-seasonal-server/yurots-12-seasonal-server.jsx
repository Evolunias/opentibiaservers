import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-seasonal-server');
}

export default function Yurots12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-seasonal-server" />;
}
