import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-france-servers');
}

export default function ZuneraOtFranceServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-france-servers" />;
}
