import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-no-reset-server');
}

export default function ZuneraOt15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-no-reset-server" />;
}
