import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-seasonal-server');
}

export default function ZuneraOt80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-seasonal-server" />;
}
