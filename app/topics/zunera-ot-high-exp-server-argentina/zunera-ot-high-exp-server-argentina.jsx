import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-argentina');
}

export default function ZuneraOtHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-argentina" />;
}
