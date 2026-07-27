import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-launch');
}

export default function ZnoteAacLaunchKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-launch" />;
}
