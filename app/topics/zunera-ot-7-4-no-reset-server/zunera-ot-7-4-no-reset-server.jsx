import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-no-reset-server');
}

export default function ZuneraOt74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-no-reset-server" />;
}
