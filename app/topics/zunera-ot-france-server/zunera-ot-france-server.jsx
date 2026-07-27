import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-france-server');
}

export default function ZuneraOtFranceServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-france-server" />;
}
