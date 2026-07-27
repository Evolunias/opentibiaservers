import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-seasonal-server');
}

export default function Yurots1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-seasonal-server" />;
}
