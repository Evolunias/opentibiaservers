import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-seasonal-server');
}

export default function Yurots96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-seasonal-server" />;
}
