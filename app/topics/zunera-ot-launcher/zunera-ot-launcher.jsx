import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-launcher');
}

export default function ZuneraOtLauncherKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-launcher" />;
}
