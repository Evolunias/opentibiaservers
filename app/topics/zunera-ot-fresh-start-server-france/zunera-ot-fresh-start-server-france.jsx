import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-fresh-start-server-france');
}

export default function ZuneraOtFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-fresh-start-server-france" />;
}
