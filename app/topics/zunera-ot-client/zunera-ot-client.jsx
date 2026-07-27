import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-client');
}

export default function ZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-client" />;
}
