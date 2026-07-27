import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-launch');
}

export default function ZuneraOtLaunchKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-launch" />;
}
