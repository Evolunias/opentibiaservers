import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-no-reset-server-france');
}

export default function ZuneraOtNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-no-reset-server-france" />;
}
