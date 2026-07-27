import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-no-reset-server-europe');
}

export default function ZuneraOtNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-no-reset-server-europe" />;
}
