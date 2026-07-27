import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-seasonal-server');
}

export default function Yurots13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-seasonal-server" />;
}
