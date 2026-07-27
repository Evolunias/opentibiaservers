import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-seasonal-server');
}

export default function ZuneraOt12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-seasonal-server" />;
}
