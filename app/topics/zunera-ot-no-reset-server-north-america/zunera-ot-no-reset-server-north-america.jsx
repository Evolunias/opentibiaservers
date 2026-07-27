import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-no-reset-server-north-america');
}

export default function ZuneraOtNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-no-reset-server-north-america" />;
}
