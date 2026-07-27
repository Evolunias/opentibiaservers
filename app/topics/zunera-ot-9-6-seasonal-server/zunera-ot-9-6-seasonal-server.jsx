import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-seasonal-server');
}

export default function ZuneraOt96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-seasonal-server" />;
}
