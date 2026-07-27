import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-france');
}

export default function ZuneraOtLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-france" />;
}
